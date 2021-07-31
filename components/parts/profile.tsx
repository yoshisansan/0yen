import Image from 'next/image'

const Profile = () => {
  return (
  <div>
    <img alt="俺氏の画像" width={100} height={100}/>
    <div className="profile-wrap">
      <div><p>Webサービスを作りたくて独学でフロントエンド開発</p></div>
      <div>Twiterアイコン</div>
    </div>
  </div>
  );
};
export default Profile;