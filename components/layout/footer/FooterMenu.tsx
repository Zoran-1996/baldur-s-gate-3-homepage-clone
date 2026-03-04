import Link from "next/link";
import { footerMenu } from "@/data/footer/menu";
import IconExternalLink from "@/components/icons/menu/IconExternalLink";
import IconMarker from "@/components/icons/IconMarker";

const FooterMenu = () => {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {footerMenu.map((group) => (
        <div key={group.heading.title}>
          <h3
            className={`text-baldur-gradient group uppercase text-lg mb-2 ${!group.heading.href ? "cursor-default" : ""}`}
          >
            {group.heading.href ? (
              group.heading.linkType === "internal" ? (
                <Link href={group.heading.href} prefetch={false}>
                  {group.heading.title}
                </Link>
              ) : (
                <a
                  className="inline-flex items-center gap-2.5"
                  href={group.heading.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {group.heading.title}
                  <IconExternalLink className="shrink-0" />
                </a>
              )
            ) : (
              group.heading.title
            )}
          </h3>

          {group.items && (
            <ul className="space-y-1">
              {group.items.map((item) => {
                const linkContent = (
                  <>
                    <div className="flex items-center">
                      <IconMarker className="transition-colors duration-400 ease-in-out text-sunrise-yellow/80 group-hover:text-white" />
                      <span className="w-0 h-px bg-wood-brown inline-block transition-all duration-400 ease-in-out group-hover:w-2.75 group-hover:bg-white"></span>
                    </div>
                    {item.title}
                    {item.linkType === "external" && (
                      <IconExternalLink className="shrink-0" />
                    )}
                  </>
                );

                const linkClasses =
                  "inline-flex text-sunrise-yellow/80 hover:text-white transition-colors duration-400 ease-in-out group items-center gap-2.5 lg:whitespace-nowrap";

                return (
                  <li key={item.title}>
                    {item.linkType === "external" ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClasses}
                      >
                        {linkContent}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={linkClasses}
                        prefetch={false}
                      >
                        {linkContent}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
