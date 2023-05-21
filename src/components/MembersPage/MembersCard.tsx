import { useEffect } from 'react';
import styles from '@/styles/members.module.css';

type MemberData = {
  name: string;
  role: string;
  image: string;
};

export default function MemberCard({ name, role, image }: MemberData) {
//   useEffect(() => {
//     const card = document.querySelector(`.${styles.member_card}`);
//     const image = card.querySelector(`.${styles.member_image}`);
//     const overlay = card.querySelector(`.${styles.overlay}`);

//     const handleMouseEnter = () => {
//       image.classList.add(styles.hidden);
//       overlay.style.opacity = '0';
//     };

//     const handleMouseLeave = () => {
//       image.classList.remove(styles.hidden);
//       overlay.style.opacity = '0.5';
//     };

//     card.addEventListener('mouseenter', handleMouseEnter);
//     card.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       card.removeEventListener('mouseenter', handleMouseEnter);
//       card.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

  return (
    <div className={styles.member_card}>
      <p className={styles.member_role}>{role}</p>
      <h3 className={styles.member_name}>{name}</h3>
      <div className={styles.member_profile}>
        <img className={styles.member_image} src={`/members/${image}`} alt="profile" />
      </div>
    </div>
  );
}
