
# ------------------------------------------------
# BASE
# ------------------------------------------------
FROM node:20-alpine AS base


# ------------------------------------------------
# DEPENDS BASE
# ------------------------------------------------
FROM base AS depends_base

RUN apk add --no-cache --virtual .gyp python3 make g++


# ------------------------------------------------
# DEPENDENCIES
# ------------------------------------------------
FROM depends_base AS depends

WORKDIR /monorepo

COPY .yarn ./.yarn
COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable yarn && yarn install --immutable


# ------------------------------------------------
# BUILD
# ------------------------------------------------
FROM base AS build

WORKDIR /monorepo

COPY --from=depends /monorepo/node_modules ./node_modules
COPY . ./

ENV NEXT_TELEMETRY_DISABLED 1

RUN corepack enable yarn && yarn nx build landing


# ------------------------------------------------
# RUNNER
# ------------------------------------------------
FROM base AS runner

WORKDIR /monorepo

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=build /monorepo/apps/landing/public ./apps/landing/public

COPY --from=build --chown=nextjs:nodejs /monorepo/apps/landing/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /monorepo/apps/landing/.next/static ./apps/landing/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "apps/landing/server.js"]