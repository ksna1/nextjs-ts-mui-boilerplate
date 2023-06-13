import { ParsedUrlQuery } from 'querystring';

export type GenericMap<T = any> = { [key: string]: T };

export type Generic2DMap<T = any> = { [key: string]: GenericMap<T> };

export interface IStringMap {
  [key: string]: string;
}
export interface IPathNameAndQuery {
  pathname: string;
  query?: ParsedUrlQuery;
}
