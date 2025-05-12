import { useProjectEnvironment } from '../../../entities/dockerFile/model/useProjectEnvironment';

type ProjectEnvironmentProps = {
  projectEnvironment: ReturnType<typeof useProjectEnvironment>;
};

const ProjectEnvironment = ({ projectEnvironment }: ProjectEnvironmentProps) => {
  const {
    useGradle,
    setUseGradle,
    useMaven,
    setUseMaven,
    useNginx,
    setUseNginx,
    useRedis,
    setUseRedis,
    useMySQL,
    setUseMySQL,
  } = projectEnvironment;

  return (
    <div className="mb-10 rounded-[10px] bg-gray-100 px-5 py-5">
      <p className="text-xl font-bold">프로젝트 환경 선택</p>
      <div className="mt-3 flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            id="gradle"
            checked={useGradle}
            onChange={() => setUseGradle(!useGradle)}
          />
          <label className="cursor-pointer" htmlFor="gradle">
            Gradle
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            id="maven"
            checked={useMaven}
            onChange={() => setUseMaven(!useMaven)}
          />
          <label className="cursor-pointer" htmlFor="maven">
            Maven
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            id="nginx"
            checked={useNginx}
            onChange={() => setUseNginx(!useNginx)}
          />
          <label className="cursor-pointer" htmlFor="nginx">
            Nginx
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            id="redis"
            checked={useRedis}
            onChange={() => setUseRedis(!useRedis)}
          />
          <label className="cursor-pointer" htmlFor="redis">
            Redis
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            id="MySQL"
            checked={useMySQL}
            onChange={() => setUseMySQL(!useMySQL)}
          />
          <label className="cursor-pointer" htmlFor="MySQL">
            MySQL
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProjectEnvironment;
