import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '@/components/LoginForm';

// Mock fetch
global.fetch = jest.fn();

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    sessionStorage.clear();
  });

  it('renders login form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByText('欢迎回来')).toBeInTheDocument();
    expect(screen.getByText('登录您的账户以继续租车之旅')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('请输入邮箱地址')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('请输入密码')).toBeInTheDocument();
    expect(screen.getByText('登录')).toBeInTheDocument();
  });

  it('shows validation error for empty email', async () => {
    render(<LoginForm />);

    const submitButton = screen.getByText('登录');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('请输入邮箱地址')).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid email', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('请输入邮箱地址');
    const submitButton = screen.getByText('登录');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('请输入有效的邮箱地址')).toBeInTheDocument();
    });
  });

  it('shows validation error for short password', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('请输入邮箱地址');
    const passwordInput = screen.getByPlaceholderText('请输入密码');
    const submitButton = screen.getByText('登录');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('密码长度至少为6位')).toBeInTheDocument();
    });
  });

  it('toggles password visibility', () => {
    render(<LoginForm />);

    const passwordInput = screen.getByPlaceholderText('请输入密码');
    const toggleButton = passwordInput.parentElement?.querySelector('button');

    expect(passwordInput).toHaveAttribute('type', 'password');

    if (toggleButton) {
      fireEvent.click(toggleButton);
      expect(passwordInput).toHaveAttribute('type', 'text');

      fireEvent.click(toggleButton);
      expect(passwordInput).toHaveAttribute('type', 'password');
    }
  });

  it('submits login form with valid data', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        code: 200,
        message: 'success',
        data: {
          token: 'test-token',
          user: {
            id: 1,
            email: 'test@example.com',
            name: 'Test User',
          },
        },
      }),
    });

    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('请输入邮箱地址');
    const passwordInput = screen.getByPlaceholderText('请输入密码');
    const submitButton = screen.getByText('登录');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:8080/api/v1/auth/login',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'test@example.com',
            password: 'password123',
          }),
        })
      );
    });
  });

  it('stores token in localStorage when remember me is checked', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        code: 200,
        message: 'success',
        data: {
          token: 'test-token',
          user: {
            id: 1,
            email: 'test@example.com',
            name: 'Test User',
          },
        },
      }),
    });

    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('请输入邮箱地址');
    const passwordInput = screen.getByPlaceholderText('请输入密码');
    const rememberCheckbox = screen.getByRole('checkbox');
    const submitButton = screen.getByText('登录');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(rememberCheckbox);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(localStorage.getItem('auth_token')).toBe('test-token');
      expect(localStorage.getItem('auth_user')).toBeTruthy();
    });
  });

  it('displays error message on login failure', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        code: 401,
        message: '邮箱或密码错误',
        data: null,
      }),
    });

    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('请输入邮箱地址');
    const passwordInput = screen.getByPlaceholderText('请输入密码');
    const submitButton = screen.getByText('登录');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('邮箱或密码错误')).toBeInTheDocument();
    });
  });
});
