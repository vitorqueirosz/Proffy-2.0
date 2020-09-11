import React from 'react';

import { Link } from 'react-router-dom';
import { Header } from './styles';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface HeaderProps {
    title?: string;
    description?: string;
    content: string;
    subDescription?: string;
}

const PageHeader: React.FC<HeaderProps> = ({
  children, content, title, description, subDescription,
}) => (
  <Header>

    <header>
      <Link to="/">
        <img src={backIcon} alt="Voltar" />
      </Link>

      <span>{content}</span>

      <img src={logoImg} alt="Logo" />
    </header>

    <div>
      {title && <strong>{title}</strong>}
      {description && <p>{description}</p>}

      {children}
    </div>
  </Header>
);

export default PageHeader;
