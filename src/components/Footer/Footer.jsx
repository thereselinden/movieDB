const Footer = () => {
  const copyright = String.fromCodePoint(0x00a9);
  const text = 'Copyright MovieDB';
  const year = '2023';

  return (
    <p>
      {copyright} {text} {year}
    </p>
  );
};

export default Footer;
