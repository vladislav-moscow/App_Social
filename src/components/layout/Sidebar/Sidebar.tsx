import React from "react";
import Image from "next/image";
import { LucideMessagesSquare, Phone, Settings, Sun, User2 } from "lucide-react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

const Sidebar = () => {
	return <aside className={styles.sidebar}>
		<Image src="/logo.svg" priority alt="icone" width={40} height={40} />
		<div>
			<Link href="/friends">
				<User2 />
			</Link>
			<Link href="/call">
				<Phone />
			</Link>
			<Link href="/chats">
				<LucideMessagesSquare />
			</Link>
			<Link href="/settings">
				<Settings />
			</Link>
		</div>
		<Sun />
	</aside>;

};

export default Sidebar;
