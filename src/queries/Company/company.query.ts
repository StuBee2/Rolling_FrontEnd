import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import CompanyRepositoryImpl from "../../repositories/Company/company.repositoryImpl";
import {
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "../../types/company.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import { CommonIdParam } from "../../repositories/common.param";
import {
  CompanyNameParam,
  CompanyParam,
} from "../../repositories/Company/company.repository";

export const usePostCompanyRegisterMutation = () => {
  const registermutation = useMutation((data: CompanyParam) =>
    CompanyRepositoryImpl.postRegister(data)
  );
  return registermutation;
};

export const useGetMyCompanyListQuery = (
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string
  >
): UseInfiniteQueryResult<CompanyInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getMyListCompany,
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getMyCompanyList({ page: pageParam }),
    {
      ...options,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanySerachListQuery = (
  { name }: CompanyNameParam,
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string[]
  >
): UseInfiniteQueryResult<CompanyInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListSearchCompany(name),
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getCompanySearchList({ name }, { page: pageParam }),
    {
      ...options,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanyListQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getListCompany,
    () => CompanyRepositoryImpl.getCompanyList(),
    {
      ...options,
    }
  );

export const useGetCompanyListIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    (string | number)[]
  >
): UseInfiniteQueryResult<CompanyInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListCompanyId(id),
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getCompanyListId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      ...options,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanyInfoIdQuery = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    CompanyInfoType,
    AxiosError,
    CompanyInfoType,
    (string | number)[]
  >
): UseQueryResult<CompanyInfoType, AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getListInfoCompanyId(id),
    () => CompanyRepositoryImpl.getCompanyInfoId({ id }),
    {
      enabled: !!id,
      ...options,
    }
  );

export const useGetCompanyRankWelfareQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankWelfare,
    () => CompanyRepositoryImpl.getCompanyRankWelfare(),
    {
      ...options,
    }
  );

export const useGetCompanyRankTotalQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankTotal,
    () => CompanyRepositoryImpl.getCompanyRankTotal(),
    {
      ...options,
    }
  );

export const useGetCompanyRankSalaryQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankSalary,
    () => CompanyRepositoryImpl.getCompanyRankSalary(),
    {
      ...options,
    }
  );

export const useGetCompanyRankBalanceQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankWelfare,
    () => CompanyRepositoryImpl.getCompanyRankBalance(),
    {
      ...options,
    }
  );
