import { formatDistanceToNow } from "date-fns";

export function formateDate(datetime) {
  const formattedDate = formatDistanceToNow(new Date(datetime), {
    addSuffix: true,
  }).replace("about ", "");

  return formattedDate;
}
