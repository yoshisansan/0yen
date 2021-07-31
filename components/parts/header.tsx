import Image from 'next/image'

// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~最小コストで独学Webサービス開発~';

const Header = () => {
  return (
    <div className="header">
      <p>{siteTitle}<span>{subTitle}</span></p>
    </div>
  );
};
export default Header;