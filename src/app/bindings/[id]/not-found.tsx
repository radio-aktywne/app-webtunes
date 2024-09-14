import { Title } from "@mantine/core";
import { labels } from "../../../config/labels";

export default function BindingNotFound() {
  return <Title>{labels.pages.bindingNotFound.text}</Title>;
}
