import React from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { backUrl } from '../../config/config';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';

const Health = ({ repo }: any) => {
  console.log(repo);
  return <div>dummy</div>;
};

export default Health;

export const config = {
  runtime: 'experimental-edge',
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  const customHeaders = new Headers();
  customHeaders.append('cookie', '');
  if (context.req && cookie) {
    customHeaders.append('cookie', cookie);
  }
  const resulit = await fetch(`${backUrl}/posts/overview`, { credentials: 'same-origin', headers: customHeaders });
  const repo = await resulit.json();
  console.log('왜 안되는걸까', repo);

  return { props: { repo } };
};
