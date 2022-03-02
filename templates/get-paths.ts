import { getFileContent } from "https://deno.land/x/resumerise_library/mod.ts";

export const getNavTemplatePath = async (): Promise<string> => {
  return await getFileContent("./widgets/nav.eta", import.meta.url);
};

export const getAddItemTemplatePath = async (): Promise<string> => {
  return await getFileContent("./widgets/add.eta", import.meta.url);
};

export const getWidgetCSSFilePath = async (): Promise<string> => {
  return await getFileContent("./css/widget.css", import.meta.url);
};

export const getWidgetKeyValuePairFilePath = async (): Promise<string> => {
  return await getFileContent("./widgets/key-value-item.eta", import.meta.url);
};

export const getWidgetKeyMailPairFilePath = async (): Promise<string> => {
  return await getFileContent("./widgets/key-mail-item.eta", import.meta.url);
};

export const getProfileItem = async (): Promise<string> => {
  return await getFileContent("./widgets/profile-item.eta", import.meta.url);
};

export const getWidgetKeyUrlPairFilePath = async (): Promise<string> => {
  return await getFileContent("./widgets/key-url-item.eta", import.meta.url);
};

export const getWidgetListFilePath = async (): Promise<string> => {
  return await getFileContent("./widgets/list.eta", import.meta.url);
};

export const getWidgetSkillListFilePath = async (): Promise<string> => {
  return await getFileContent("./widgets/skills.eta", import.meta.url);
};

export const getWidgetDateRangeFilePath = async (): Promise<string> => {
  return await getFileContent("./widgets/date-range.eta", import.meta.url);
};