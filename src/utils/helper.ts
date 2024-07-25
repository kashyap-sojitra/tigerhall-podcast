import { Category, Expert } from "../types";

export const convertImageURI = (
  imageURI: string,
  width?: number,
  height?: number
): string => {
  const w = width ? width : 244;
  const h = height ? height : 120;
  try {
    const url = new URL(imageURI);
    const newPathname = `/resize/${w}x${h}${url.pathname}`;
    return `${url.protocol}//${url.host}${newPathname}`;
  } catch (error) {
    console.error("Invalid URI:", error);
    return "";
  }
};

export const getUserNames = (experts: Expert[]): string => {
  let userNames: string = "";
  if (experts.length === 1) {
    userNames += experts[0].firstName + " " + experts[0].lastName;
  } else {
    userNames = "Multiple Experts " + " " + experts.length;
  }
  return userNames;
};

export const getCompanyNames = (experts: Expert[]): string => {
  let companyNames = "";
  experts.forEach((expert) => {
    companyNames +=
      expert.company + (experts.length > 1 && companyNames ? " | " : "");
  });
  return companyNames;
};

export const getCategories = (categories: Category[]): string => {
  let categoryString: string = "";
  categories.forEach((category) => {
    categoryString += category.name + " ";
  });
  return categoryString.toUpperCase().replace(/CATEGORY/g, "");
};

export const getTimeLabel = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hoursString = hours > 0 ? `${hours}h ` : "";
  const minutesString = minutes > 0 ? `${minutes}m ` : "";
  const secondsString = `${remainingSeconds}s`;

  return `${hoursString}${minutesString}${secondsString}`;
};
