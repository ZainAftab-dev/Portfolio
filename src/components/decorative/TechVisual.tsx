import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Cluster = {
  nodes: [number, number][];
  edges: [number, number][];
};

type NodeLayout = {
  primary: Cluster;
  secondary: Cluster;
  corners: "tl-br" | "tr-bl";
};

// Two small node clusters per layout (opposite corners) so tiles read as
// composed rather than mostly-empty, plus a ring around the icon to anchor
// the center. Echoes the Hero's particle-network motif at rest.
const LAYOUTS: NodeLayout[] = [
  {
    primary: {
      nodes: [
        [40, 50],
        [90, 90],
        [60, 140],
      ],
      edges: [
        [0, 1],
        [1, 2],
      ],
    },
    secondary: {
      nodes: [
        [340, 220],
        [365, 255],
      ],
      edges: [[0, 1]],
    },
    corners: "tl-br",
  },
  {
    primary: {
      nodes: [
        [340, 60],
        [300, 110],
        [355, 150],
      ],
      edges: [
        [0, 1],
        [1, 2],
      ],
    },
    secondary: {
      nodes: [
        [55, 235],
        [30, 265],
      ],
      edges: [[0, 1]],
    },
    corners: "tr-bl",
  },
  {
    primary: {
      nodes: [
        [50, 220],
        [100, 250],
        [30, 260],
      ],
      edges: [
        [0, 1],
        [0, 2],
      ],
    },
    secondary: {
      nodes: [
        [335, 55],
        [360, 90],
      ],
      edges: [[0, 1]],
    },
    corners: "tl-br",
  },
  {
    primary: {
      nodes: [
        [330, 220],
        [370, 250],
        [310, 260],
      ],
      edges: [
        [0, 1],
        [0, 2],
      ],
    },
    secondary: {
      nodes: [
        [45, 55],
        [70, 90],
      ],
      edges: [[0, 1]],
    },
    corners: "tr-bl",
  },
];

// Node clusters for very wide/short tiles (e.g. full-width bento cards).
// The viewBox's vertical extent gets cropped hard by `slice` scaling on
// these aspect ratios, so nodes stay inside a safe centered band instead
// of the corners used by the standard LAYOUTS.
const COMPACT_LAYOUTS: NodeLayout[] = [
  {
    primary: {
      nodes: [
        [40, 130],
        [72, 168],
        [98, 148],
      ],
      edges: [
        [0, 1],
        [1, 2],
      ],
    },
    secondary: {
      nodes: [
        [330, 168],
        [360, 140],
      ],
      edges: [[0, 1]],
    },
    corners: "tl-br",
  },
  {
    primary: {
      nodes: [
        [330, 130],
        [300, 168],
        [355, 148],
      ],
      edges: [
        [0, 1],
        [1, 2],
      ],
    },
    secondary: {
      nodes: [
        [55, 168],
        [30, 140],
      ],
      edges: [[0, 1]],
    },
    corners: "tr-bl",
  },
];

function ClusterSvg({ cluster, dim = false }: { cluster: Cluster; dim?: boolean }) {
  return (
    <>
      {cluster.edges.map(([a, b], i) => (
        <line
          key={i}
          x1={cluster.nodes[a][0]}
          y1={cluster.nodes[a][1]}
          x2={cluster.nodes[b][0]}
          y2={cluster.nodes[b][1]}
          stroke="#FF5A1F"
          strokeOpacity={dim ? 0.22 : 0.35}
          strokeWidth={1}
        />
      ))}
      {cluster.nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 0 && !dim ? 3 : 2}
          fill="#FF5A1F"
          fillOpacity={dim ? 0.45 : 0.6}
        />
      ))}
    </>
  );
}

export function TechVisual({
  icon: Icon,
  variant = 0,
  className,
  iconClassName = "h-12 w-12 md:h-14 md:w-14",
  compact = false,
}: {
  icon: LucideIcon;
  variant?: number;
  className?: string;
  iconClassName?: string;
  /** Use for very wide/short tiles (full-width bento cards) so the rings and node clusters stay inside the visible crop. */
  compact?: boolean;
}) {
  const layout = compact
    ? COMPACT_LAYOUTS[variant % COMPACT_LAYOUTS.length]
    : LAYOUTS[variant % LAYOUTS.length];
  const [ringInner, ringOuter] = compact ? [26, 38] : [58, 82];

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-card", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`dot-grid-${variant}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#dot-grid-${variant})`} />

        <circle
          cx="200"
          cy="150"
          r={ringInner}
          fill="none"
          stroke="#FF5A1F"
          strokeOpacity={0.25}
          strokeWidth={1}
        />
        <circle
          cx="200"
          cy="150"
          r={ringOuter}
          fill="none"
          stroke="#FF5A1F"
          strokeOpacity={0.12}
          strokeWidth={1}
        />

        <ClusterSvg cluster={layout.primary} />
        <ClusterSvg cluster={layout.secondary} dim />

        {/* HUD-style corner brackets — skipped in compact mode, they'd fall outside the visible crop */}
        {!compact &&
          (layout.corners === "tl-br" ? (
            <>
              <path
                d="M14 30 V14 H30"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1.5}
                fill="none"
              />
              <path
                d="M386 270 V286 H370"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1.5}
                fill="none"
              />
            </>
          ) : (
            <>
              <path
                d="M386 30 V14 H370"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1.5}
                fill="none"
              />
              <path
                d="M14 270 V286 H30"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1.5}
                fill="none"
              />
            </>
          ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className={cn("text-accent", iconClassName)}
          strokeWidth={1.5}
          style={{ filter: "drop-shadow(0 0 18px rgba(255,90,31,0.45))" }}
        />
      </div>
    </div>
  );
}
