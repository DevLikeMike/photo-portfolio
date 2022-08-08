import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0;

  .styledItem-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    h2 {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .styledItem-content.reverse {
    order: 2;
  }

  .styledItem-image {
    width: 100%;

    &:hover {
      cursor: pointer;
    }

    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;

export default function ShowcaseItem({
  title,
  children,
  itemImage,
  reverse,
  date,
}) {
  return (
    <Link href='/'>
      <StyledItem>
        <div
          className={
            reverse ? "styledItem-content reverse" : "styledItem-content"
          }
        >
          <h2>{title}</h2>
          <p>{children}</p>
          <p>{date}</p>
        </div>
        <div className='styledItem-image'>
          <Image src={itemImage} width='450' height='350' />
        </div>
      </StyledItem>
    </Link>
  );
}
