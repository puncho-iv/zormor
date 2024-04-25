interface IIcon {
  size: any;
  color: any;
}

export const CloseBlackIcon = ({ size }: IIcon) => {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="#4F4B5C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size ?? 12}
      height={size ?? 12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99967 1.33334V10.6667M1.33301 6.00001H10.6663"
        stroke={color ?? "#4F4B5C"}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
