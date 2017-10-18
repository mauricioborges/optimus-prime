import { expense } from './expense'
import { query } from './query'
import { receipt } from './receipt'
import { provider } from './provider'
import { congressman } from './congressman'
import { office } from './office'
import { congressmanStatus } from './congressmanStatus'

export const typeDefs = [
  expense,
  query,
  congressman,
  receipt,
  provider,
  office,
  congressmanStatus
]
