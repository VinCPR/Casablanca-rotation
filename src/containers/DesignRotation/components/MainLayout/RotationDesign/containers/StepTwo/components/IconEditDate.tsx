type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function IconEditDate({ className, style }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20H20"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19.9998H8L19.2929 8.70696C19.6834 8.31643 19.6834 7.68327 19.2929 7.29274L16.7071 4.70696C16.3166 4.31643 15.6834 4.31643 15.2929 4.70696L4 15.9998V19.9998Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8L16 12"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
