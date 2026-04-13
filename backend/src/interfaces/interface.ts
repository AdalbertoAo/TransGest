export interface PgStatResult {
  count: bigint
}

export interface DatabaseStatus {
    instancias : number,
    status:  boolean,
    timestamp: Date
}

export interface ErrorCostumer {
    name?: string;
    message: string;
    stack?: string;
    statusCode: number
}