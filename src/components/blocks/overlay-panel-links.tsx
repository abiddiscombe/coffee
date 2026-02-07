import { Surface } from "@/components/elements/surface";
import { GlobeIcon } from "lucide-react";

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
    <ul
      className={[
        "mt-10 grid items-stretch justify-evenly gap-2",
        items.length >= 3 ? "grid-cols-3" : "grid-cols-2",
      ].join(" ")}
    >
      {items.map((item, i) => (
        <Surface key={i} as="li" interactive={true} className="p-0">
          <a
            href={item.href}
            target="_blank"
            className="grid min-h-20 place-items-center"
          >
            <div className="text-primary-600 [&>svg]:text-primary-800 text-xs [&>svg]:mx-auto [&>svg]:mb-1.5 [&>svg]:h-5 [&>svg]:w-5">
              {item.icon}
              {item.label}
            </div>
          </a>
        </Surface>
      ))}
    </ul>
  );
};
