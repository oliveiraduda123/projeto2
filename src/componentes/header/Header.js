"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import React, { useState } from "react";

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(true);

	const Nav = () => {
		setIsNavVisible(!isNavVisible);
	};
	return (
		<header className="header">
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<h1 className="titulo">Maria Eduarda</h1>
					<button onClick={Nav}>
						<Image
							src="/assets/more.png"
							width="20"
							height="20"
							alt="hamburguer"
						/>
					</button>
				</div>
				{isNavVisible && (
					<ul className={styles.link_items}>
						<li>
							<Link href="/home">Home</Link>
						</li>
						<li>
							<Link href="/médico">Médico</Link>
						</li>
						<li>
							<Link href="/paciente">Paciente</Link>
						</li>
						<li>
							<Link href="/consulta">consulta</Link>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
}