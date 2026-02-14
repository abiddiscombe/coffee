import { GlobeIcon } from "lucide-react";
import { Button } from "../elements/button";
import { Icon } from "../elements/icon";
import { ToolGroup } from "../elements/tool-group";

export const OverlayPanelLinks = (p: { website?: string }) => {
  const items = [
    ...(!!p.website
      ? [
          {
            icon: <GlobeIcon />,
            href: `https://${p.website}`,
            label: "Website",
          },
        ]
      : []),
  ];

  return (
    <ToolGroup asChild axis="y">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Button asChild>
              <a href={item.href} target="_blank">
                <Icon>{item.icon}</Icon>
                {item.label}
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </ToolGroup>
  );
};
