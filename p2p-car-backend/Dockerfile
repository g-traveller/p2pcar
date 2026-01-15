FROM openjdk:21-slim

WORKDIR /app

# Install gradle
RUN apt-get update && \
    apt-get install -y gradle && \
    rm -rf /var/lib/apt/lists/*

# Copy build files
COPY build.gradle.kts settings.gradle.kts ./
COPY src ./src

# Build application
RUN gradle build --no-daemon

# Expose port
EXPOSE 8080

# Run application
CMD ["java", "-jar", "build/libs/p2p-car-backend-1.0.0.jar"]
