type Props = {
  isActive: boolean;
};

export default function IconRotationPlan({ isActive }: Props) {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2692 1.41667H14.5385V2.47917C14.5385 2.67396 14.3827 2.83333 14.1923 2.83333H13.5C13.3096 2.83333 13.1538 2.67396 13.1538 2.47917V1.41667H4.84615V2.47917C4.84615 2.67396 4.69038 2.83333 4.5 2.83333H3.80769C3.61731 2.83333 3.46154 2.67396 3.46154 2.47917V1.41667H1.73077C0.778846 1.41667 0 2.21354 0 3.1875V15.2292C0 16.2031 0.778846 17 1.73077 17H16.2692C17.2212 17 18 16.2031 18 15.2292V3.1875C18 2.21354 17.2212 1.41667 16.2692 1.41667ZM16.6154 14.6979C16.6154 15.1849 16.226 15.5833 15.75 15.5833H2.25C1.77404 15.5833 1.38462 15.1849 1.38462 14.6979V6.72917C1.38462 6.53438 1.54038 6.375 1.73077 6.375H16.2692C16.4596 6.375 16.6154 6.53438 16.6154 6.72917V14.6979ZM4.84615 0.354167C4.84615 0.159375 4.69038 0 4.5 0H3.80769C3.61731 0 3.46154 0.159375 3.46154 0.354167V1.41667H4.84615V0.354167ZM4 13V15H2V13H4ZM7 13V15H5V13H7ZM10 13V15H8V13H10ZM13 13V15H11V13H13ZM16 13V15H14V13H16ZM4 10V12H2V10H4ZM7 10V12H5V10H7ZM10 10V12H8V10H10ZM13 10V12H11V10H13ZM16 10V12H14V10H16ZM4 7V9H2V7H4ZM7 7V9H5V7H7ZM10 7V9H8V7H10ZM13 7V9H11V7H13ZM16 7V9H14V7H16ZM14.1923 0C14.3827 0 14.5385 0.159375 14.5385 0.354167V1.41667H13.1538V0.354167C13.1538 0.159375 13.3096 0 13.5 0H14.1923Z"
        fill={isActive ? "#3bacb6" : "#778494"}
      />
    </svg>
  );
}
