import { instance } from '@/shared/api/instance';
import { Job, JobsResponse } from './types';
import { BuildStatus } from './types';

// Job 목록 정보 조회
export const getJobsInfo = async (): Promise<JobsResponse> => {
  const response = await instance.get('/jenkinsapi/info');
  return response.data;
};

// 가장 마지막의 Job id 조회
export const getLastJobId = async (jobName: string) => {
  const response = await instance.get(`/jenkinsapi/${jobName}/lastBuild`);
  return response.data;
};

// 특정 job의 모든 빌드 정보 조회
export const getJobBuildsInfo = async (jobName: string) => {
  const response = await instance.get(`/jenkinsapi/job/${jobName}`);
  console.log(response);
  return response.data;
};

// 특정 job의 특정 빌드 정보 조회
export const getJobBuildInfo = async (
  jobName: string,
  buildNumber: string,
): Promise<BuildStatus> => {
  const response = await instance.get<BuildStatus>(`/jenkinsapi/job/${jobName}/${buildNumber}`);
  return response.data;
};

export const getBuildStream = async (jobName: string, buildId: string) => {
  const response = await instance.get(`/jenkinsapi/stream/${jobName}/${buildId}`);
  return response.data;
};
