export interface PgStatResult {
  count: bigint
}

export interface DatabaseStatus {
    instancias : Number,
    status: boolean,
    timestamp: Date
}