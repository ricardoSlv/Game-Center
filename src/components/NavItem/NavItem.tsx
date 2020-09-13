import React from 'react'

import styles from './NavItem.module.css'
export default function NavItem({ text, href, github }: { text: string, href: string, github?: boolean }) {
    return (
        <a className={styles.item + ' ' + styles.underline+' '+(github?styles.github:'')}
            href={href}>
            {text}
        </a>
    )
}
