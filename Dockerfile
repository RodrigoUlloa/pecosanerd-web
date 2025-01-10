# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy source code
COPY . .

# Build frontend
RUN npm run build

FROM node:20-alpine
COPY --from=builder /app/dist dist

# Create .env file from build args
ARG RESEND_API_KEY
RUN echo "RESEND_API_KEY=${RESEND_API_KEY}" > .env
COPY . .
ENV NODE_ENV=production
RUN npm install
CMD ["npm", "start"]