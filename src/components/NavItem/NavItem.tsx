import React from 'react'
import { Link } from 'react-router-dom'

import styles from './NavItem.module.css'
export default function NavItem(props: { text: string, link: string, github?: boolean }) {
    return (
        props.github ?
            <a className={styles.item + ' ' + styles.underline + ' ' + styles.github}
                href={props.link}>
                {props.text}
            </a> :
            <Link className={styles.item + ' ' + styles.underline}
                to={props.link}>
                {props.text}
            </Link>
    )
}
