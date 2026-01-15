import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.container}>
        <h1 className={styles.title}>找到您理想的租车</h1>
        <div className={styles.searchCard}>
          <div className={styles.searchFields}>
            <div className={styles.field}>
              <label className={styles.label}>取车地点</label>
              <div className={styles.inputContainer}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#6B7280"/>
                </svg>
                <input
                  type="text"
                  placeholder="输入城市或地址"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>开始日期</label>
              <div className={styles.inputContainer}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a1 1 0 10-2 0v1H7V4a1 1 0 00-1-1zm0 3h8v2H6V6zm0 4h8v6H6v-6z" fill="#6B7280"/>
                </svg>
                <input type="date" className={styles.input} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>结束日期</label>
              <div className={styles.inputContainer}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a1 1 0 10-2 0v1H7V4a1 1 0 00-1-1zm0 3h8v2H6V6zm0 4h8v6H6v-6z" fill="#6B7280"/>
                </svg>
                <input type="date" className={styles.input} />
              </div>
            </div>
            <button className={styles.searchButton}>
              <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 119 1a8 8 0 010 16zm0-2A6 6 0 109 3a6 6 0 000 12zm7.07-2.93l-1.41 1.41 3.36 3.36 1.41-1.41-3.36-3.36z" fill="white"/>
              </svg>
              <span>搜索</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
