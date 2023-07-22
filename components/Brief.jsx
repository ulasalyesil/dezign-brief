import { Button } from "./ui/button";

export default function Brief({ projectTitle, projectIndustry, projectBrief }) {
  return (
    <div className="max-w-[528px] flex flex-col gap-6">
      <div className="bg-gray-100 flex flex-col gap-6 p-6 rounded-3xl">
        <div className="flex justify-center items-start gap-4 self-stretch">
          <div className="flex flex-col gap-2 flex-1">
            <h4 className="font-semibold text-sm text-gray-500">TITLE</h4>
            <p className="text-sm">{projectTitle}</p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h4 className="font-semibold text-sm text-gray-500">INDUSTRY</h4>
            <p className="text-sm">{projectIndustry}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h4 className="font-semibold text-sm text-gray-500">BRIEF</h4>
          <p className="text-sm">{projectBrief}</p>
        </div>
      </div>
    </div>
  );
}
