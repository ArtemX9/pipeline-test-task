import React from 'react';
import NextLink from 'next/link';

export default function Link({text, url, className}) {
    return <NextLink href={url}><a className={className}>{text}</a></NextLink>
}
