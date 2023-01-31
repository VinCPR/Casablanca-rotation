type Props = {
  isActive: boolean;
};

export default function IconDesignRotation({ isActive }: Props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2H3C2.44772 2 2 2.44772 2 3V5C2 5.55228 2.44772 6 3 6H5C5.55228 6 6 5.55228 6 5V3C6 2.44772 5.55228 2 5 2ZM3 0C1.34315 0 0 1.34315 0 3V5C0 6.65685 1.34315 8 3 8H5C6.65685 8 8 6.65685 8 5V3C8 1.34315 6.65685 0 5 0H3Z"
        fill={isActive ? "#3bacb6" : "#778494"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 12H3C2.44772 12 2 12.4477 2 13V15C2 15.5523 2.44772 16 3 16H5C5.55228 16 6 15.5523 6 15V13C6 12.4477 5.55228 12 5 12ZM3 10C1.34315 10 0 11.3431 0 13V15C0 16.6569 1.34315 18 3 18H5C6.65685 18 8 16.6569 8 15V13C8 11.3431 6.65685 10 5 10H3Z"
        fill={isActive ? "#3bacb6" : "#778494"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2H13C12.4477 2 12 2.44772 12 3V5C12 5.55228 12.4477 6 13 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2ZM13 0C11.3431 0 10 1.34315 10 3V5C10 6.65685 11.3431 8 13 8H15C16.6569 8 18 6.65685 18 5V3C18 1.34315 16.6569 0 15 0H13Z"
        fill={isActive ? "#3bacb6" : "#778494"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 12H13C12.4477 12 12 12.4477 12 13V15C12 15.5523 12.4477 16 13 16H15C15.5523 16 16 15.5523 16 15V13C16 12.4477 15.5523 12 15 12ZM13 10C11.3431 10 10 11.3431 10 13V15C10 16.6569 11.3431 18 13 18H15C16.6569 18 18 16.6569 18 15V13C18 11.3431 16.6569 10 15 10H13Z"
        fill={isActive ? "#3bacb6" : "#778494"}
      />
    </svg>
  );
}
