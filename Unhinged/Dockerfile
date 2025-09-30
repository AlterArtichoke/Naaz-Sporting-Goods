FROM golang:1.24-alpine AS builder

WORKDIR /src/app

# Download dependencies
RUN go install github.com/air-verse/air@latest

# Copy the rest of the application files
COPY . .

EXPOSE 3000

CMD ["air", "-c", "air.toml"]

RUN go mod tidy