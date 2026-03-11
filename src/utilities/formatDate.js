import { formatDistanceToNow } from "date-fns";

export function formateDate(datetime) {
  if (!datetime) return "";
  const formattedDate = formatDistanceToNow(new Date(datetime), {
    addSuffix: true,
  }).replace("about ", "");

  return formattedDate;
}
