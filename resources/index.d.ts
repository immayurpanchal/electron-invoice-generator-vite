
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model bills
 * 
 */
export type bills = {
  id: number
  customerId: number
  date: Date
}

/**
 * Model bill_items
 * 
 */
export type bill_items = {
  id: number
  billId: number
  productId: number
  qty: number
  price: number
}

/**
 * Model products
 * 
 */
export type products = {
  id: number
  product_name: string
  qty: number
}

/**
 * Model customers
 * 
 */
export type customers = {
  id: number
  name: string
  city: string
  mobileNumber: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bills
 * const bills = await prisma.bills.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bills
   * const bills = await prisma.bills.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.bills`: Exposes CRUD operations for the **bills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bills.findMany()
    * ```
    */
  get bills(): Prisma.billsDelegate<GlobalReject>;

  /**
   * `prisma.bill_items`: Exposes CRUD operations for the **bill_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bill_items
    * const bill_items = await prisma.bill_items.findMany()
    * ```
    */
  get bill_items(): Prisma.bill_itemsDelegate<GlobalReject>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<GlobalReject>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    bills: 'bills',
    bill_items: 'bill_items',
    products: 'products',
    customers: 'customers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BillsCountOutputType
   */


  export type BillsCountOutputType = {
    bill_items: number
  }

  export type BillsCountOutputTypeSelect = {
    bill_items?: boolean
  }

  export type BillsCountOutputTypeGetPayload<S extends boolean | null | undefined | BillsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BillsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BillsCountOutputTypeArgs)
    ? BillsCountOutputType 
    : S extends { select: any } & (BillsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BillsCountOutputType ? BillsCountOutputType[P] : never
  } 
      : BillsCountOutputType




  // Custom InputTypes

  /**
   * BillsCountOutputType without action
   */
  export type BillsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BillsCountOutputType
     */
    select?: BillsCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductsCountOutputType
   */


  export type ProductsCountOutputType = {
    bill_items: number
  }

  export type ProductsCountOutputTypeSelect = {
    bill_items?: boolean
  }

  export type ProductsCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductsCountOutputTypeArgs)
    ? ProductsCountOutputType 
    : S extends { select: any } & (ProductsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductsCountOutputType ? ProductsCountOutputType[P] : never
  } 
      : ProductsCountOutputType




  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomersCountOutputType
   */


  export type CustomersCountOutputType = {
    bills: number
  }

  export type CustomersCountOutputTypeSelect = {
    bills?: boolean
  }

  export type CustomersCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomersCountOutputTypeArgs)
    ? CustomersCountOutputType 
    : S extends { select: any } & (CustomersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomersCountOutputType ? CustomersCountOutputType[P] : never
  } 
      : CustomersCountOutputType




  // Custom InputTypes

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model bills
   */


  export type AggregateBills = {
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  export type BillsAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type BillsSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type BillsMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    date: Date | null
  }

  export type BillsMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    date: Date | null
  }

  export type BillsCountAggregateOutputType = {
    id: number
    customerId: number
    date: number
    _all: number
  }


  export type BillsAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type BillsSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type BillsMinAggregateInputType = {
    id?: true
    customerId?: true
    date?: true
  }

  export type BillsMaxAggregateInputType = {
    id?: true
    customerId?: true
    date?: true
  }

  export type BillsCountAggregateInputType = {
    id?: true
    customerId?: true
    date?: true
    _all?: true
  }

  export type BillsAggregateArgs = {
    /**
     * Filter which bills to aggregate.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: Enumerable<billsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bills
    **/
    _count?: true | BillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillsMaxAggregateInputType
  }

  export type GetBillsAggregateType<T extends BillsAggregateArgs> = {
        [P in keyof T & keyof AggregateBills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBills[P]>
      : GetScalarType<T[P], AggregateBills[P]>
  }




  export type BillsGroupByArgs = {
    where?: billsWhereInput
    orderBy?: Enumerable<billsOrderByWithAggregationInput>
    by: BillsScalarFieldEnum[]
    having?: billsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillsCountAggregateInputType | true
    _avg?: BillsAvgAggregateInputType
    _sum?: BillsSumAggregateInputType
    _min?: BillsMinAggregateInputType
    _max?: BillsMaxAggregateInputType
  }


  export type BillsGroupByOutputType = {
    id: number
    customerId: number
    date: Date
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  type GetBillsGroupByPayload<T extends BillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillsGroupByOutputType[P]>
            : GetScalarType<T[P], BillsGroupByOutputType[P]>
        }
      >
    >


  export type billsSelect = {
    id?: boolean
    customerId?: boolean
    date?: boolean
    customer?: boolean | customersArgs
    bill_items?: boolean | bills$bill_itemsArgs
    _count?: boolean | BillsCountOutputTypeArgs
  }


  export type billsInclude = {
    customer?: boolean | customersArgs
    bill_items?: boolean | bills$bill_itemsArgs
    _count?: boolean | BillsCountOutputTypeArgs
  }

  export type billsGetPayload<S extends boolean | null | undefined | billsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? bills :
    S extends undefined ? never :
    S extends { include: any } & (billsArgs | billsFindManyArgs)
    ? bills  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? customersGetPayload<S['include'][P]> :
        P extends 'bill_items' ? Array < bill_itemsGetPayload<S['include'][P]>>  :
        P extends '_count' ? BillsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (billsArgs | billsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? customersGetPayload<S['select'][P]> :
        P extends 'bill_items' ? Array < bill_itemsGetPayload<S['select'][P]>>  :
        P extends '_count' ? BillsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof bills ? bills[P] : never
  } 
      : bills


  type billsCountArgs = 
    Omit<billsFindManyArgs, 'select' | 'include'> & {
      select?: BillsCountAggregateInputType | true
    }

  export interface billsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Bills that matches the filter.
     * @param {billsFindUniqueArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends billsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, billsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'bills'> extends True ? Prisma__billsClient<billsGetPayload<T>> : Prisma__billsClient<billsGetPayload<T> | null, null>

    /**
     * Find one Bills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {billsFindUniqueOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends billsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, billsFindUniqueOrThrowArgs>
    ): Prisma__billsClient<billsGetPayload<T>>

    /**
     * Find the first Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsFindFirstArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends billsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, billsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'bills'> extends True ? Prisma__billsClient<billsGetPayload<T>> : Prisma__billsClient<billsGetPayload<T> | null, null>

    /**
     * Find the first Bills that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsFindFirstOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends billsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, billsFindFirstOrThrowArgs>
    ): Prisma__billsClient<billsGetPayload<T>>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bills.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billsWithIdOnly = await prisma.bills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends billsFindManyArgs>(
      args?: SelectSubset<T, billsFindManyArgs>
    ): Prisma.PrismaPromise<Array<billsGetPayload<T>>>

    /**
     * Create a Bills.
     * @param {billsCreateArgs} args - Arguments to create a Bills.
     * @example
     * // Create one Bills
     * const Bills = await prisma.bills.create({
     *   data: {
     *     // ... data to create a Bills
     *   }
     * })
     * 
    **/
    create<T extends billsCreateArgs>(
      args: SelectSubset<T, billsCreateArgs>
    ): Prisma__billsClient<billsGetPayload<T>>

    /**
     * Delete a Bills.
     * @param {billsDeleteArgs} args - Arguments to delete one Bills.
     * @example
     * // Delete one Bills
     * const Bills = await prisma.bills.delete({
     *   where: {
     *     // ... filter to delete one Bills
     *   }
     * })
     * 
    **/
    delete<T extends billsDeleteArgs>(
      args: SelectSubset<T, billsDeleteArgs>
    ): Prisma__billsClient<billsGetPayload<T>>

    /**
     * Update one Bills.
     * @param {billsUpdateArgs} args - Arguments to update one Bills.
     * @example
     * // Update one Bills
     * const bills = await prisma.bills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends billsUpdateArgs>(
      args: SelectSubset<T, billsUpdateArgs>
    ): Prisma__billsClient<billsGetPayload<T>>

    /**
     * Delete zero or more Bills.
     * @param {billsDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends billsDeleteManyArgs>(
      args?: SelectSubset<T, billsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bills = await prisma.bills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends billsUpdateManyArgs>(
      args: SelectSubset<T, billsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bills.
     * @param {billsUpsertArgs} args - Arguments to update or create a Bills.
     * @example
     * // Update or create a Bills
     * const bills = await prisma.bills.upsert({
     *   create: {
     *     // ... data to create a Bills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bills we want to update
     *   }
     * })
    **/
    upsert<T extends billsUpsertArgs>(
      args: SelectSubset<T, billsUpsertArgs>
    ): Prisma__billsClient<billsGetPayload<T>>

    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bills.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends billsCountArgs>(
      args?: Subset<T, billsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillsAggregateArgs>(args: Subset<T, BillsAggregateArgs>): Prisma.PrismaPromise<GetBillsAggregateType<T>>

    /**
     * Group by Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillsGroupByArgs['orderBy'] }
        : { orderBy?: BillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for bills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__billsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    customer<T extends customersArgs= {}>(args?: Subset<T, customersArgs>): Prisma__customersClient<customersGetPayload<T> | Null>;

    bill_items<T extends bills$bill_itemsArgs= {}>(args?: Subset<T, bills$bill_itemsArgs>): Prisma.PrismaPromise<Array<bill_itemsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * bills base type for findUnique actions
   */
  export type billsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * Filter, which bills to fetch.
     */
    where: billsWhereUniqueInput
  }

  /**
   * bills findUnique
   */
  export interface billsFindUniqueArgs extends billsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bills findUniqueOrThrow
   */
  export type billsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * Filter, which bills to fetch.
     */
    where: billsWhereUniqueInput
  }


  /**
   * bills base type for findFirst actions
   */
  export type billsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: Enumerable<billsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: Enumerable<BillsScalarFieldEnum>
  }

  /**
   * bills findFirst
   */
  export interface billsFindFirstArgs extends billsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bills findFirstOrThrow
   */
  export type billsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: Enumerable<billsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: Enumerable<BillsScalarFieldEnum>
  }


  /**
   * bills findMany
   */
  export type billsFindManyArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: Enumerable<billsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bills.
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    distinct?: Enumerable<BillsScalarFieldEnum>
  }


  /**
   * bills create
   */
  export type billsCreateArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * The data needed to create a bills.
     */
    data: XOR<billsCreateInput, billsUncheckedCreateInput>
  }


  /**
   * bills update
   */
  export type billsUpdateArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * The data needed to update a bills.
     */
    data: XOR<billsUpdateInput, billsUncheckedUpdateInput>
    /**
     * Choose, which bills to update.
     */
    where: billsWhereUniqueInput
  }


  /**
   * bills updateMany
   */
  export type billsUpdateManyArgs = {
    /**
     * The data used to update bills.
     */
    data: XOR<billsUpdateManyMutationInput, billsUncheckedUpdateManyInput>
    /**
     * Filter which bills to update
     */
    where?: billsWhereInput
  }


  /**
   * bills upsert
   */
  export type billsUpsertArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * The filter to search for the bills to update in case it exists.
     */
    where: billsWhereUniqueInput
    /**
     * In case the bills found by the `where` argument doesn't exist, create a new bills with this data.
     */
    create: XOR<billsCreateInput, billsUncheckedCreateInput>
    /**
     * In case the bills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<billsUpdateInput, billsUncheckedUpdateInput>
  }


  /**
   * bills delete
   */
  export type billsDeleteArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    /**
     * Filter which bills to delete.
     */
    where: billsWhereUniqueInput
  }


  /**
   * bills deleteMany
   */
  export type billsDeleteManyArgs = {
    /**
     * Filter which bills to delete
     */
    where?: billsWhereInput
  }


  /**
   * bills.bill_items
   */
  export type bills$bill_itemsArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    where?: bill_itemsWhereInput
    orderBy?: Enumerable<bill_itemsOrderByWithRelationInput>
    cursor?: bill_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Bill_itemsScalarFieldEnum>
  }


  /**
   * bills without action
   */
  export type billsArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
  }



  /**
   * Model bill_items
   */


  export type AggregateBill_items = {
    _count: Bill_itemsCountAggregateOutputType | null
    _avg: Bill_itemsAvgAggregateOutputType | null
    _sum: Bill_itemsSumAggregateOutputType | null
    _min: Bill_itemsMinAggregateOutputType | null
    _max: Bill_itemsMaxAggregateOutputType | null
  }

  export type Bill_itemsAvgAggregateOutputType = {
    id: number | null
    billId: number | null
    productId: number | null
    qty: number | null
    price: number | null
  }

  export type Bill_itemsSumAggregateOutputType = {
    id: number | null
    billId: number | null
    productId: number | null
    qty: number | null
    price: number | null
  }

  export type Bill_itemsMinAggregateOutputType = {
    id: number | null
    billId: number | null
    productId: number | null
    qty: number | null
    price: number | null
  }

  export type Bill_itemsMaxAggregateOutputType = {
    id: number | null
    billId: number | null
    productId: number | null
    qty: number | null
    price: number | null
  }

  export type Bill_itemsCountAggregateOutputType = {
    id: number
    billId: number
    productId: number
    qty: number
    price: number
    _all: number
  }


  export type Bill_itemsAvgAggregateInputType = {
    id?: true
    billId?: true
    productId?: true
    qty?: true
    price?: true
  }

  export type Bill_itemsSumAggregateInputType = {
    id?: true
    billId?: true
    productId?: true
    qty?: true
    price?: true
  }

  export type Bill_itemsMinAggregateInputType = {
    id?: true
    billId?: true
    productId?: true
    qty?: true
    price?: true
  }

  export type Bill_itemsMaxAggregateInputType = {
    id?: true
    billId?: true
    productId?: true
    qty?: true
    price?: true
  }

  export type Bill_itemsCountAggregateInputType = {
    id?: true
    billId?: true
    productId?: true
    qty?: true
    price?: true
    _all?: true
  }

  export type Bill_itemsAggregateArgs = {
    /**
     * Filter which bill_items to aggregate.
     */
    where?: bill_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_items to fetch.
     */
    orderBy?: Enumerable<bill_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bill_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bill_items
    **/
    _count?: true | Bill_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bill_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bill_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bill_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bill_itemsMaxAggregateInputType
  }

  export type GetBill_itemsAggregateType<T extends Bill_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateBill_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill_items[P]>
      : GetScalarType<T[P], AggregateBill_items[P]>
  }




  export type Bill_itemsGroupByArgs = {
    where?: bill_itemsWhereInput
    orderBy?: Enumerable<bill_itemsOrderByWithAggregationInput>
    by: Bill_itemsScalarFieldEnum[]
    having?: bill_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bill_itemsCountAggregateInputType | true
    _avg?: Bill_itemsAvgAggregateInputType
    _sum?: Bill_itemsSumAggregateInputType
    _min?: Bill_itemsMinAggregateInputType
    _max?: Bill_itemsMaxAggregateInputType
  }


  export type Bill_itemsGroupByOutputType = {
    id: number
    billId: number
    productId: number
    qty: number
    price: number
    _count: Bill_itemsCountAggregateOutputType | null
    _avg: Bill_itemsAvgAggregateOutputType | null
    _sum: Bill_itemsSumAggregateOutputType | null
    _min: Bill_itemsMinAggregateOutputType | null
    _max: Bill_itemsMaxAggregateOutputType | null
  }

  type GetBill_itemsGroupByPayload<T extends Bill_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Bill_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bill_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bill_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Bill_itemsGroupByOutputType[P]>
        }
      >
    >


  export type bill_itemsSelect = {
    id?: boolean
    billId?: boolean
    productId?: boolean
    qty?: boolean
    price?: boolean
    bill?: boolean | billsArgs
    product?: boolean | productsArgs
  }


  export type bill_itemsInclude = {
    bill?: boolean | billsArgs
    product?: boolean | productsArgs
  }

  export type bill_itemsGetPayload<S extends boolean | null | undefined | bill_itemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? bill_items :
    S extends undefined ? never :
    S extends { include: any } & (bill_itemsArgs | bill_itemsFindManyArgs)
    ? bill_items  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'bill' ? billsGetPayload<S['include'][P]> :
        P extends 'product' ? productsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (bill_itemsArgs | bill_itemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'bill' ? billsGetPayload<S['select'][P]> :
        P extends 'product' ? productsGetPayload<S['select'][P]> :  P extends keyof bill_items ? bill_items[P] : never
  } 
      : bill_items


  type bill_itemsCountArgs = 
    Omit<bill_itemsFindManyArgs, 'select' | 'include'> & {
      select?: Bill_itemsCountAggregateInputType | true
    }

  export interface bill_itemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Bill_items that matches the filter.
     * @param {bill_itemsFindUniqueArgs} args - Arguments to find a Bill_items
     * @example
     * // Get one Bill_items
     * const bill_items = await prisma.bill_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bill_itemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, bill_itemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'bill_items'> extends True ? Prisma__bill_itemsClient<bill_itemsGetPayload<T>> : Prisma__bill_itemsClient<bill_itemsGetPayload<T> | null, null>

    /**
     * Find one Bill_items that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bill_itemsFindUniqueOrThrowArgs} args - Arguments to find a Bill_items
     * @example
     * // Get one Bill_items
     * const bill_items = await prisma.bill_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bill_itemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, bill_itemsFindUniqueOrThrowArgs>
    ): Prisma__bill_itemsClient<bill_itemsGetPayload<T>>

    /**
     * Find the first Bill_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_itemsFindFirstArgs} args - Arguments to find a Bill_items
     * @example
     * // Get one Bill_items
     * const bill_items = await prisma.bill_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bill_itemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, bill_itemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'bill_items'> extends True ? Prisma__bill_itemsClient<bill_itemsGetPayload<T>> : Prisma__bill_itemsClient<bill_itemsGetPayload<T> | null, null>

    /**
     * Find the first Bill_items that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_itemsFindFirstOrThrowArgs} args - Arguments to find a Bill_items
     * @example
     * // Get one Bill_items
     * const bill_items = await prisma.bill_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bill_itemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, bill_itemsFindFirstOrThrowArgs>
    ): Prisma__bill_itemsClient<bill_itemsGetPayload<T>>

    /**
     * Find zero or more Bill_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_itemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bill_items
     * const bill_items = await prisma.bill_items.findMany()
     * 
     * // Get first 10 Bill_items
     * const bill_items = await prisma.bill_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bill_itemsWithIdOnly = await prisma.bill_items.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends bill_itemsFindManyArgs>(
      args?: SelectSubset<T, bill_itemsFindManyArgs>
    ): Prisma.PrismaPromise<Array<bill_itemsGetPayload<T>>>

    /**
     * Create a Bill_items.
     * @param {bill_itemsCreateArgs} args - Arguments to create a Bill_items.
     * @example
     * // Create one Bill_items
     * const Bill_items = await prisma.bill_items.create({
     *   data: {
     *     // ... data to create a Bill_items
     *   }
     * })
     * 
    **/
    create<T extends bill_itemsCreateArgs>(
      args: SelectSubset<T, bill_itemsCreateArgs>
    ): Prisma__bill_itemsClient<bill_itemsGetPayload<T>>

    /**
     * Delete a Bill_items.
     * @param {bill_itemsDeleteArgs} args - Arguments to delete one Bill_items.
     * @example
     * // Delete one Bill_items
     * const Bill_items = await prisma.bill_items.delete({
     *   where: {
     *     // ... filter to delete one Bill_items
     *   }
     * })
     * 
    **/
    delete<T extends bill_itemsDeleteArgs>(
      args: SelectSubset<T, bill_itemsDeleteArgs>
    ): Prisma__bill_itemsClient<bill_itemsGetPayload<T>>

    /**
     * Update one Bill_items.
     * @param {bill_itemsUpdateArgs} args - Arguments to update one Bill_items.
     * @example
     * // Update one Bill_items
     * const bill_items = await prisma.bill_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bill_itemsUpdateArgs>(
      args: SelectSubset<T, bill_itemsUpdateArgs>
    ): Prisma__bill_itemsClient<bill_itemsGetPayload<T>>

    /**
     * Delete zero or more Bill_items.
     * @param {bill_itemsDeleteManyArgs} args - Arguments to filter Bill_items to delete.
     * @example
     * // Delete a few Bill_items
     * const { count } = await prisma.bill_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bill_itemsDeleteManyArgs>(
      args?: SelectSubset<T, bill_itemsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bill_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bill_items
     * const bill_items = await prisma.bill_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bill_itemsUpdateManyArgs>(
      args: SelectSubset<T, bill_itemsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill_items.
     * @param {bill_itemsUpsertArgs} args - Arguments to update or create a Bill_items.
     * @example
     * // Update or create a Bill_items
     * const bill_items = await prisma.bill_items.upsert({
     *   create: {
     *     // ... data to create a Bill_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill_items we want to update
     *   }
     * })
    **/
    upsert<T extends bill_itemsUpsertArgs>(
      args: SelectSubset<T, bill_itemsUpsertArgs>
    ): Prisma__bill_itemsClient<bill_itemsGetPayload<T>>

    /**
     * Count the number of Bill_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bill_itemsCountArgs} args - Arguments to filter Bill_items to count.
     * @example
     * // Count the number of Bill_items
     * const count = await prisma.bill_items.count({
     *   where: {
     *     // ... the filter for the Bill_items we want to count
     *   }
     * })
    **/
    count<T extends bill_itemsCountArgs>(
      args?: Subset<T, bill_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bill_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bill_itemsAggregateArgs>(args: Subset<T, Bill_itemsAggregateArgs>): Prisma.PrismaPromise<GetBill_itemsAggregateType<T>>

    /**
     * Group by Bill_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Bill_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bill_itemsGroupByArgs['orderBy'] }
        : { orderBy?: Bill_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Bill_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBill_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for bill_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__bill_itemsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bill<T extends billsArgs= {}>(args?: Subset<T, billsArgs>): Prisma__billsClient<billsGetPayload<T> | Null>;

    product<T extends productsArgs= {}>(args?: Subset<T, productsArgs>): Prisma__productsClient<productsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * bill_items base type for findUnique actions
   */
  export type bill_itemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * Filter, which bill_items to fetch.
     */
    where: bill_itemsWhereUniqueInput
  }

  /**
   * bill_items findUnique
   */
  export interface bill_itemsFindUniqueArgs extends bill_itemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bill_items findUniqueOrThrow
   */
  export type bill_itemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * Filter, which bill_items to fetch.
     */
    where: bill_itemsWhereUniqueInput
  }


  /**
   * bill_items base type for findFirst actions
   */
  export type bill_itemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * Filter, which bill_items to fetch.
     */
    where?: bill_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_items to fetch.
     */
    orderBy?: Enumerable<bill_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bill_items.
     */
    cursor?: bill_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bill_items.
     */
    distinct?: Enumerable<Bill_itemsScalarFieldEnum>
  }

  /**
   * bill_items findFirst
   */
  export interface bill_itemsFindFirstArgs extends bill_itemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bill_items findFirstOrThrow
   */
  export type bill_itemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * Filter, which bill_items to fetch.
     */
    where?: bill_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_items to fetch.
     */
    orderBy?: Enumerable<bill_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bill_items.
     */
    cursor?: bill_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bill_items.
     */
    distinct?: Enumerable<Bill_itemsScalarFieldEnum>
  }


  /**
   * bill_items findMany
   */
  export type bill_itemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * Filter, which bill_items to fetch.
     */
    where?: bill_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bill_items to fetch.
     */
    orderBy?: Enumerable<bill_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bill_items.
     */
    cursor?: bill_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bill_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bill_items.
     */
    skip?: number
    distinct?: Enumerable<Bill_itemsScalarFieldEnum>
  }


  /**
   * bill_items create
   */
  export type bill_itemsCreateArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * The data needed to create a bill_items.
     */
    data: XOR<bill_itemsCreateInput, bill_itemsUncheckedCreateInput>
  }


  /**
   * bill_items update
   */
  export type bill_itemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * The data needed to update a bill_items.
     */
    data: XOR<bill_itemsUpdateInput, bill_itemsUncheckedUpdateInput>
    /**
     * Choose, which bill_items to update.
     */
    where: bill_itemsWhereUniqueInput
  }


  /**
   * bill_items updateMany
   */
  export type bill_itemsUpdateManyArgs = {
    /**
     * The data used to update bill_items.
     */
    data: XOR<bill_itemsUpdateManyMutationInput, bill_itemsUncheckedUpdateManyInput>
    /**
     * Filter which bill_items to update
     */
    where?: bill_itemsWhereInput
  }


  /**
   * bill_items upsert
   */
  export type bill_itemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * The filter to search for the bill_items to update in case it exists.
     */
    where: bill_itemsWhereUniqueInput
    /**
     * In case the bill_items found by the `where` argument doesn't exist, create a new bill_items with this data.
     */
    create: XOR<bill_itemsCreateInput, bill_itemsUncheckedCreateInput>
    /**
     * In case the bill_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bill_itemsUpdateInput, bill_itemsUncheckedUpdateInput>
  }


  /**
   * bill_items delete
   */
  export type bill_itemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    /**
     * Filter which bill_items to delete.
     */
    where: bill_itemsWhereUniqueInput
  }


  /**
   * bill_items deleteMany
   */
  export type bill_itemsDeleteManyArgs = {
    /**
     * Filter which bill_items to delete
     */
    where?: bill_itemsWhereInput
  }


  /**
   * bill_items without action
   */
  export type bill_itemsArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
  }



  /**
   * Model products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    qty: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    qty: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    product_name: string | null
    qty: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    product_name: string | null
    qty: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    product_name: number
    qty: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    qty?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    qty?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    product_name?: true
    qty?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    product_name?: true
    qty?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    product_name?: true
    qty?: true
    _all?: true
  }

  export type ProductsAggregateArgs = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs = {
    where?: productsWhereInput
    orderBy?: Enumerable<productsOrderByWithAggregationInput>
    by: ProductsScalarFieldEnum[]
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    id: number
    product_name: string
    qty: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect = {
    id?: boolean
    product_name?: boolean
    qty?: boolean
    bill_items?: boolean | products$bill_itemsArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }


  export type productsInclude = {
    bill_items?: boolean | products$bill_itemsArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }

  export type productsGetPayload<S extends boolean | null | undefined | productsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? products :
    S extends undefined ? never :
    S extends { include: any } & (productsArgs | productsFindManyArgs)
    ? products  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'bill_items' ? Array < bill_itemsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (productsArgs | productsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'bill_items' ? Array < bill_itemsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof products ? products[P] : never
  } 
      : products


  type productsCountArgs = 
    Omit<productsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'products'> extends True ? Prisma__productsClient<productsGetPayload<T>> : Prisma__productsClient<productsGetPayload<T> | null, null>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, productsFindUniqueOrThrowArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'products'> extends True ? Prisma__productsClient<productsGetPayload<T>> : Prisma__productsClient<productsGetPayload<T> | null, null>

    /**
     * Find the first Products that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs>(
      args?: SelectSubset<T, productsFindManyArgs>
    ): Prisma.PrismaPromise<Array<productsGetPayload<T>>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs>(
      args: SelectSubset<T, productsCreateArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs>(
      args: SelectSubset<T, productsDeleteArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs>(
      args: SelectSubset<T, productsUpdateArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs>(
      args?: SelectSubset<T, productsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs>(
      args: SelectSubset<T, productsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs>(
      args: SelectSubset<T, productsUpsertArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bill_items<T extends products$bill_itemsArgs= {}>(args?: Subset<T, products$bill_itemsArgs>): Prisma.PrismaPromise<Array<bill_itemsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * products base type for findUnique actions
   */
  export type productsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUnique
   */
  export interface productsFindUniqueArgs extends productsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products base type for findFirst actions
   */
  export type productsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }

  /**
   * products findFirst
   */
  export interface productsFindFirstArgs extends productsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products create
   */
  export type productsCreateArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products update
   */
  export type productsUpdateArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }


  /**
   * products.bill_items
   */
  export type products$bill_itemsArgs = {
    /**
     * Select specific fields to fetch from the bill_items
     */
    select?: bill_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bill_itemsInclude | null
    where?: bill_itemsWhereInput
    orderBy?: Enumerable<bill_itemsOrderByWithRelationInput>
    cursor?: bill_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Bill_itemsScalarFieldEnum>
  }


  /**
   * products without action
   */
  export type productsArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
  }



  /**
   * Model customers
   */


  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    mobileNumber: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    mobileNumber: string | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    city: number
    mobileNumber: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    mobileNumber?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    mobileNumber?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    mobileNumber?: true
    _all?: true
  }

  export type CustomersAggregateArgs = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs = {
    where?: customersWhereInput
    orderBy?: Enumerable<customersOrderByWithAggregationInput>
    by: CustomersScalarFieldEnum[]
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }


  export type CustomersGroupByOutputType = {
    id: number
    name: string
    city: string
    mobileNumber: string
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect = {
    id?: boolean
    name?: boolean
    city?: boolean
    mobileNumber?: boolean
    bills?: boolean | customers$billsArgs
    _count?: boolean | CustomersCountOutputTypeArgs
  }


  export type customersInclude = {
    bills?: boolean | customers$billsArgs
    _count?: boolean | CustomersCountOutputTypeArgs
  }

  export type customersGetPayload<S extends boolean | null | undefined | customersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? customers :
    S extends undefined ? never :
    S extends { include: any } & (customersArgs | customersFindManyArgs)
    ? customers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'bills' ? Array < billsGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (customersArgs | customersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'bills' ? Array < billsGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof customers ? customers[P] : never
  } 
      : customers


  type customersCountArgs = 
    Omit<customersFindManyArgs, 'select' | 'include'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends customersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, customersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'customers'> extends True ? Prisma__customersClient<customersGetPayload<T>> : Prisma__customersClient<customersGetPayload<T> | null, null>

    /**
     * Find one Customers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, customersFindUniqueOrThrowArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends customersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, customersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'customers'> extends True ? Prisma__customersClient<customersGetPayload<T>> : Prisma__customersClient<customersGetPayload<T> | null, null>

    /**
     * Find the first Customers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, customersFindFirstOrThrowArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends customersFindManyArgs>(
      args?: SelectSubset<T, customersFindManyArgs>
    ): Prisma.PrismaPromise<Array<customersGetPayload<T>>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
    **/
    create<T extends customersCreateArgs>(
      args: SelectSubset<T, customersCreateArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
    **/
    delete<T extends customersDeleteArgs>(
      args: SelectSubset<T, customersDeleteArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends customersUpdateArgs>(
      args: SelectSubset<T, customersUpdateArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends customersDeleteManyArgs>(
      args?: SelectSubset<T, customersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends customersUpdateManyArgs>(
      args: SelectSubset<T, customersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
    **/
    upsert<T extends customersUpsertArgs>(
      args: SelectSubset<T, customersUpsertArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__customersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bills<T extends customers$billsArgs= {}>(args?: Subset<T, customers$billsArgs>): Prisma.PrismaPromise<Array<billsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * customers base type for findUnique actions
   */
  export type customersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUnique
   */
  export interface customersFindUniqueArgs extends customersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }


  /**
   * customers base type for findFirst actions
   */
  export type customersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }

  /**
   * customers findFirst
   */
  export interface customersFindFirstArgs extends customersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * customers findMany
   */
  export type customersFindManyArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * customers create
   */
  export type customersCreateArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }


  /**
   * customers update
   */
  export type customersUpdateArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }


  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
  }


  /**
   * customers upsert
   */
  export type customersUpsertArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }


  /**
   * customers delete
   */
  export type customersDeleteArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }


  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
  }


  /**
   * customers.bills
   */
  export type customers$billsArgs = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billsInclude | null
    where?: billsWhereInput
    orderBy?: Enumerable<billsOrderByWithRelationInput>
    cursor?: billsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BillsScalarFieldEnum>
  }


  /**
   * customers without action
   */
  export type customersArgs = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Bill_itemsScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    productId: 'productId',
    qty: 'qty',
    price: 'price'
  };

  export type Bill_itemsScalarFieldEnum = (typeof Bill_itemsScalarFieldEnum)[keyof typeof Bill_itemsScalarFieldEnum]


  export const BillsScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    date: 'date'
  };

  export type BillsScalarFieldEnum = (typeof BillsScalarFieldEnum)[keyof typeof BillsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    mobileNumber: 'mobileNumber'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    product_name: 'product_name',
    qty: 'qty'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type billsWhereInput = {
    AND?: Enumerable<billsWhereInput>
    OR?: Enumerable<billsWhereInput>
    NOT?: Enumerable<billsWhereInput>
    id?: IntFilter | number
    customerId?: IntFilter | number
    date?: DateTimeFilter | Date | string
    customer?: XOR<CustomersRelationFilter, customersWhereInput>
    bill_items?: Bill_itemsListRelationFilter
  }

  export type billsOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    customer?: customersOrderByWithRelationInput
    bill_items?: bill_itemsOrderByRelationAggregateInput
  }

  export type billsWhereUniqueInput = {
    id?: number
  }

  export type billsOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    _count?: billsCountOrderByAggregateInput
    _avg?: billsAvgOrderByAggregateInput
    _max?: billsMaxOrderByAggregateInput
    _min?: billsMinOrderByAggregateInput
    _sum?: billsSumOrderByAggregateInput
  }

  export type billsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<billsScalarWhereWithAggregatesInput>
    OR?: Enumerable<billsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<billsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    customerId?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type bill_itemsWhereInput = {
    AND?: Enumerable<bill_itemsWhereInput>
    OR?: Enumerable<bill_itemsWhereInput>
    NOT?: Enumerable<bill_itemsWhereInput>
    id?: IntFilter | number
    billId?: IntFilter | number
    productId?: IntFilter | number
    qty?: IntFilter | number
    price?: FloatFilter | number
    bill?: XOR<BillsRelationFilter, billsWhereInput>
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type bill_itemsOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    bill?: billsOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type bill_itemsWhereUniqueInput = {
    id?: number
  }

  export type bill_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    _count?: bill_itemsCountOrderByAggregateInput
    _avg?: bill_itemsAvgOrderByAggregateInput
    _max?: bill_itemsMaxOrderByAggregateInput
    _min?: bill_itemsMinOrderByAggregateInput
    _sum?: bill_itemsSumOrderByAggregateInput
  }

  export type bill_itemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<bill_itemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<bill_itemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<bill_itemsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    billId?: IntWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
    qty?: IntWithAggregatesFilter | number
    price?: FloatWithAggregatesFilter | number
  }

  export type productsWhereInput = {
    AND?: Enumerable<productsWhereInput>
    OR?: Enumerable<productsWhereInput>
    NOT?: Enumerable<productsWhereInput>
    id?: IntFilter | number
    product_name?: StringFilter | string
    qty?: IntFilter | number
    bill_items?: Bill_itemsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    product_name?: SortOrder
    qty?: SortOrder
    bill_items?: bill_itemsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = {
    id?: number
  }

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    product_name?: SortOrder
    qty?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productsScalarWhereWithAggregatesInput>
    OR?: Enumerable<productsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_name?: StringWithAggregatesFilter | string
    qty?: IntWithAggregatesFilter | number
  }

  export type customersWhereInput = {
    AND?: Enumerable<customersWhereInput>
    OR?: Enumerable<customersWhereInput>
    NOT?: Enumerable<customersWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    city?: StringFilter | string
    mobileNumber?: StringFilter | string
    bills?: BillsListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    mobileNumber?: SortOrder
    bills?: billsOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = {
    id?: number
  }

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    mobileNumber?: SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<customersScalarWhereWithAggregatesInput>
    OR?: Enumerable<customersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<customersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    mobileNumber?: StringWithAggregatesFilter | string
  }

  export type billsCreateInput = {
    date: Date | string
    customer: customersCreateNestedOneWithoutBillsInput
    bill_items?: bill_itemsCreateNestedManyWithoutBillInput
  }

  export type billsUncheckedCreateInput = {
    id?: number
    customerId: number
    date: Date | string
    bill_items?: bill_itemsUncheckedCreateNestedManyWithoutBillInput
  }

  export type billsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customersUpdateOneRequiredWithoutBillsNestedInput
    bill_items?: bill_itemsUpdateManyWithoutBillNestedInput
  }

  export type billsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_items?: bill_itemsUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bill_itemsCreateInput = {
    qty: number
    price: number
    bill: billsCreateNestedOneWithoutBill_itemsInput
    product: productsCreateNestedOneWithoutBill_itemsInput
  }

  export type bill_itemsUncheckedCreateInput = {
    id?: number
    billId: number
    productId: number
    qty: number
    price: number
  }

  export type bill_itemsUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    bill?: billsUpdateOneRequiredWithoutBill_itemsNestedInput
    product?: productsUpdateOneRequiredWithoutBill_itemsNestedInput
  }

  export type bill_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type bill_itemsUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type bill_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type productsCreateInput = {
    product_name: string
    qty: number
    bill_items?: bill_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    product_name: string
    qty: number
    bill_items?: bill_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    bill_items?: bill_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    bill_items?: bill_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type customersCreateInput = {
    name: string
    city: string
    mobileNumber: string
    bills?: billsCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    mobileNumber: string
    bills?: billsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    bills?: billsUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    bills?: billsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
  }

  export type customersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CustomersRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type Bill_itemsListRelationFilter = {
    every?: bill_itemsWhereInput
    some?: bill_itemsWhereInput
    none?: bill_itemsWhereInput
  }

  export type bill_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type billsCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
  }

  export type billsAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type billsMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
  }

  export type billsMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
  }

  export type billsSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type BillsRelationFilter = {
    is?: billsWhereInput
    isNot?: billsWhereInput
  }

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type bill_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type bill_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type bill_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type bill_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type bill_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    qty?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    qty?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    qty?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BillsListRelationFilter = {
    every?: billsWhereInput
    some?: billsWhereInput
    none?: billsWhereInput
  }

  export type billsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    mobileNumber?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    mobileNumber?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    mobileNumber?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customersCreateNestedOneWithoutBillsInput = {
    create?: XOR<customersCreateWithoutBillsInput, customersUncheckedCreateWithoutBillsInput>
    connectOrCreate?: customersCreateOrConnectWithoutBillsInput
    connect?: customersWhereUniqueInput
  }

  export type bill_itemsCreateNestedManyWithoutBillInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutBillInput>, Enumerable<bill_itemsUncheckedCreateWithoutBillInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutBillInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
  }

  export type bill_itemsUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutBillInput>, Enumerable<bill_itemsUncheckedCreateWithoutBillInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutBillInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type customersUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<customersCreateWithoutBillsInput, customersUncheckedCreateWithoutBillsInput>
    connectOrCreate?: customersCreateOrConnectWithoutBillsInput
    upsert?: customersUpsertWithoutBillsInput
    connect?: customersWhereUniqueInput
    update?: XOR<customersUpdateWithoutBillsInput, customersUncheckedUpdateWithoutBillsInput>
  }

  export type bill_itemsUpdateManyWithoutBillNestedInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutBillInput>, Enumerable<bill_itemsUncheckedCreateWithoutBillInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutBillInput>
    upsert?: Enumerable<bill_itemsUpsertWithWhereUniqueWithoutBillInput>
    set?: Enumerable<bill_itemsWhereUniqueInput>
    disconnect?: Enumerable<bill_itemsWhereUniqueInput>
    delete?: Enumerable<bill_itemsWhereUniqueInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
    update?: Enumerable<bill_itemsUpdateWithWhereUniqueWithoutBillInput>
    updateMany?: Enumerable<bill_itemsUpdateManyWithWhereWithoutBillInput>
    deleteMany?: Enumerable<bill_itemsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bill_itemsUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutBillInput>, Enumerable<bill_itemsUncheckedCreateWithoutBillInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutBillInput>
    upsert?: Enumerable<bill_itemsUpsertWithWhereUniqueWithoutBillInput>
    set?: Enumerable<bill_itemsWhereUniqueInput>
    disconnect?: Enumerable<bill_itemsWhereUniqueInput>
    delete?: Enumerable<bill_itemsWhereUniqueInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
    update?: Enumerable<bill_itemsUpdateWithWhereUniqueWithoutBillInput>
    updateMany?: Enumerable<bill_itemsUpdateManyWithWhereWithoutBillInput>
    deleteMany?: Enumerable<bill_itemsScalarWhereInput>
  }

  export type billsCreateNestedOneWithoutBill_itemsInput = {
    create?: XOR<billsCreateWithoutBill_itemsInput, billsUncheckedCreateWithoutBill_itemsInput>
    connectOrCreate?: billsCreateOrConnectWithoutBill_itemsInput
    connect?: billsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutBill_itemsInput = {
    create?: XOR<productsCreateWithoutBill_itemsInput, productsUncheckedCreateWithoutBill_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutBill_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type billsUpdateOneRequiredWithoutBill_itemsNestedInput = {
    create?: XOR<billsCreateWithoutBill_itemsInput, billsUncheckedCreateWithoutBill_itemsInput>
    connectOrCreate?: billsCreateOrConnectWithoutBill_itemsInput
    upsert?: billsUpsertWithoutBill_itemsInput
    connect?: billsWhereUniqueInput
    update?: XOR<billsUpdateWithoutBill_itemsInput, billsUncheckedUpdateWithoutBill_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutBill_itemsNestedInput = {
    create?: XOR<productsCreateWithoutBill_itemsInput, productsUncheckedCreateWithoutBill_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutBill_itemsInput
    upsert?: productsUpsertWithoutBill_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutBill_itemsInput, productsUncheckedUpdateWithoutBill_itemsInput>
  }

  export type bill_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutProductInput>, Enumerable<bill_itemsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutProductInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
  }

  export type bill_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutProductInput>, Enumerable<bill_itemsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutProductInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type bill_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutProductInput>, Enumerable<bill_itemsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<bill_itemsUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<bill_itemsWhereUniqueInput>
    disconnect?: Enumerable<bill_itemsWhereUniqueInput>
    delete?: Enumerable<bill_itemsWhereUniqueInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
    update?: Enumerable<bill_itemsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<bill_itemsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<bill_itemsScalarWhereInput>
  }

  export type bill_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<bill_itemsCreateWithoutProductInput>, Enumerable<bill_itemsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<bill_itemsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<bill_itemsUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<bill_itemsWhereUniqueInput>
    disconnect?: Enumerable<bill_itemsWhereUniqueInput>
    delete?: Enumerable<bill_itemsWhereUniqueInput>
    connect?: Enumerable<bill_itemsWhereUniqueInput>
    update?: Enumerable<bill_itemsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<bill_itemsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<bill_itemsScalarWhereInput>
  }

  export type billsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<billsCreateWithoutCustomerInput>, Enumerable<billsUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<billsCreateOrConnectWithoutCustomerInput>
    connect?: Enumerable<billsWhereUniqueInput>
  }

  export type billsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<billsCreateWithoutCustomerInput>, Enumerable<billsUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<billsCreateOrConnectWithoutCustomerInput>
    connect?: Enumerable<billsWhereUniqueInput>
  }

  export type billsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<billsCreateWithoutCustomerInput>, Enumerable<billsUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<billsCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<billsUpsertWithWhereUniqueWithoutCustomerInput>
    set?: Enumerable<billsWhereUniqueInput>
    disconnect?: Enumerable<billsWhereUniqueInput>
    delete?: Enumerable<billsWhereUniqueInput>
    connect?: Enumerable<billsWhereUniqueInput>
    update?: Enumerable<billsUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<billsUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<billsScalarWhereInput>
  }

  export type billsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<billsCreateWithoutCustomerInput>, Enumerable<billsUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<billsCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<billsUpsertWithWhereUniqueWithoutCustomerInput>
    set?: Enumerable<billsWhereUniqueInput>
    disconnect?: Enumerable<billsWhereUniqueInput>
    delete?: Enumerable<billsWhereUniqueInput>
    connect?: Enumerable<billsWhereUniqueInput>
    update?: Enumerable<billsUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<billsUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<billsScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type customersCreateWithoutBillsInput = {
    name: string
    city: string
    mobileNumber: string
  }

  export type customersUncheckedCreateWithoutBillsInput = {
    id?: number
    name: string
    city: string
    mobileNumber: string
  }

  export type customersCreateOrConnectWithoutBillsInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutBillsInput, customersUncheckedCreateWithoutBillsInput>
  }

  export type bill_itemsCreateWithoutBillInput = {
    qty: number
    price: number
    product: productsCreateNestedOneWithoutBill_itemsInput
  }

  export type bill_itemsUncheckedCreateWithoutBillInput = {
    id?: number
    productId: number
    qty: number
    price: number
  }

  export type bill_itemsCreateOrConnectWithoutBillInput = {
    where: bill_itemsWhereUniqueInput
    create: XOR<bill_itemsCreateWithoutBillInput, bill_itemsUncheckedCreateWithoutBillInput>
  }

  export type customersUpsertWithoutBillsInput = {
    update: XOR<customersUpdateWithoutBillsInput, customersUncheckedUpdateWithoutBillsInput>
    create: XOR<customersCreateWithoutBillsInput, customersUncheckedCreateWithoutBillsInput>
  }

  export type customersUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
  }

  export type customersUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
  }

  export type bill_itemsUpsertWithWhereUniqueWithoutBillInput = {
    where: bill_itemsWhereUniqueInput
    update: XOR<bill_itemsUpdateWithoutBillInput, bill_itemsUncheckedUpdateWithoutBillInput>
    create: XOR<bill_itemsCreateWithoutBillInput, bill_itemsUncheckedCreateWithoutBillInput>
  }

  export type bill_itemsUpdateWithWhereUniqueWithoutBillInput = {
    where: bill_itemsWhereUniqueInput
    data: XOR<bill_itemsUpdateWithoutBillInput, bill_itemsUncheckedUpdateWithoutBillInput>
  }

  export type bill_itemsUpdateManyWithWhereWithoutBillInput = {
    where: bill_itemsScalarWhereInput
    data: XOR<bill_itemsUpdateManyMutationInput, bill_itemsUncheckedUpdateManyWithoutBill_itemsInput>
  }

  export type bill_itemsScalarWhereInput = {
    AND?: Enumerable<bill_itemsScalarWhereInput>
    OR?: Enumerable<bill_itemsScalarWhereInput>
    NOT?: Enumerable<bill_itemsScalarWhereInput>
    id?: IntFilter | number
    billId?: IntFilter | number
    productId?: IntFilter | number
    qty?: IntFilter | number
    price?: FloatFilter | number
  }

  export type billsCreateWithoutBill_itemsInput = {
    date: Date | string
    customer: customersCreateNestedOneWithoutBillsInput
  }

  export type billsUncheckedCreateWithoutBill_itemsInput = {
    id?: number
    customerId: number
    date: Date | string
  }

  export type billsCreateOrConnectWithoutBill_itemsInput = {
    where: billsWhereUniqueInput
    create: XOR<billsCreateWithoutBill_itemsInput, billsUncheckedCreateWithoutBill_itemsInput>
  }

  export type productsCreateWithoutBill_itemsInput = {
    product_name: string
    qty: number
  }

  export type productsUncheckedCreateWithoutBill_itemsInput = {
    id?: number
    product_name: string
    qty: number
  }

  export type productsCreateOrConnectWithoutBill_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutBill_itemsInput, productsUncheckedCreateWithoutBill_itemsInput>
  }

  export type billsUpsertWithoutBill_itemsInput = {
    update: XOR<billsUpdateWithoutBill_itemsInput, billsUncheckedUpdateWithoutBill_itemsInput>
    create: XOR<billsCreateWithoutBill_itemsInput, billsUncheckedCreateWithoutBill_itemsInput>
  }

  export type billsUpdateWithoutBill_itemsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customersUpdateOneRequiredWithoutBillsNestedInput
  }

  export type billsUncheckedUpdateWithoutBill_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutBill_itemsInput = {
    update: XOR<productsUpdateWithoutBill_itemsInput, productsUncheckedUpdateWithoutBill_itemsInput>
    create: XOR<productsCreateWithoutBill_itemsInput, productsUncheckedCreateWithoutBill_itemsInput>
  }

  export type productsUpdateWithoutBill_itemsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateWithoutBill_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type bill_itemsCreateWithoutProductInput = {
    qty: number
    price: number
    bill: billsCreateNestedOneWithoutBill_itemsInput
  }

  export type bill_itemsUncheckedCreateWithoutProductInput = {
    id?: number
    billId: number
    qty: number
    price: number
  }

  export type bill_itemsCreateOrConnectWithoutProductInput = {
    where: bill_itemsWhereUniqueInput
    create: XOR<bill_itemsCreateWithoutProductInput, bill_itemsUncheckedCreateWithoutProductInput>
  }

  export type bill_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: bill_itemsWhereUniqueInput
    update: XOR<bill_itemsUpdateWithoutProductInput, bill_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<bill_itemsCreateWithoutProductInput, bill_itemsUncheckedCreateWithoutProductInput>
  }

  export type bill_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: bill_itemsWhereUniqueInput
    data: XOR<bill_itemsUpdateWithoutProductInput, bill_itemsUncheckedUpdateWithoutProductInput>
  }

  export type bill_itemsUpdateManyWithWhereWithoutProductInput = {
    where: bill_itemsScalarWhereInput
    data: XOR<bill_itemsUpdateManyMutationInput, bill_itemsUncheckedUpdateManyWithoutBill_itemsInput>
  }

  export type billsCreateWithoutCustomerInput = {
    date: Date | string
    bill_items?: bill_itemsCreateNestedManyWithoutBillInput
  }

  export type billsUncheckedCreateWithoutCustomerInput = {
    id?: number
    date: Date | string
    bill_items?: bill_itemsUncheckedCreateNestedManyWithoutBillInput
  }

  export type billsCreateOrConnectWithoutCustomerInput = {
    where: billsWhereUniqueInput
    create: XOR<billsCreateWithoutCustomerInput, billsUncheckedCreateWithoutCustomerInput>
  }

  export type billsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: billsWhereUniqueInput
    update: XOR<billsUpdateWithoutCustomerInput, billsUncheckedUpdateWithoutCustomerInput>
    create: XOR<billsCreateWithoutCustomerInput, billsUncheckedCreateWithoutCustomerInput>
  }

  export type billsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: billsWhereUniqueInput
    data: XOR<billsUpdateWithoutCustomerInput, billsUncheckedUpdateWithoutCustomerInput>
  }

  export type billsUpdateManyWithWhereWithoutCustomerInput = {
    where: billsScalarWhereInput
    data: XOR<billsUpdateManyMutationInput, billsUncheckedUpdateManyWithoutBillsInput>
  }

  export type billsScalarWhereInput = {
    AND?: Enumerable<billsScalarWhereInput>
    OR?: Enumerable<billsScalarWhereInput>
    NOT?: Enumerable<billsScalarWhereInput>
    id?: IntFilter | number
    customerId?: IntFilter | number
    date?: DateTimeFilter | Date | string
  }

  export type bill_itemsUpdateWithoutBillInput = {
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: productsUpdateOneRequiredWithoutBill_itemsNestedInput
  }

  export type bill_itemsUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type bill_itemsUncheckedUpdateManyWithoutBill_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type bill_itemsUpdateWithoutProductInput = {
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    bill?: billsUpdateOneRequiredWithoutBill_itemsNestedInput
  }

  export type bill_itemsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type billsUpdateWithoutCustomerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_items?: bill_itemsUpdateManyWithoutBillNestedInput
  }

  export type billsUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_items?: bill_itemsUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billsUncheckedUpdateManyWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}