'use client';
import Link from 'next/link';
import styles from './DashboardSidebar.module.css';
import TicketIcon from '@/public/assets/icon/TicketIcon';
import { useState } from 'react';

export default function DashboardSidebar() {
    const [activeItem, setActiveItem] = useState("ticket");

    const handleItemClick = (item) => {
        setActiveItem(item); // Đặt item được chọn vào state
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.profile}>
                <div className='flex-space'>
                    <img className={styles.avatar} src="/assets/icon/avatar.png" alt="User Avatar" />
                    <span className={styles.userName}>Tên người dùng</span>
                </div>
                <div className='pb-15 w-100 flex-center border-1px-bottom'>
                    <div className="btn btn-default flex-space grey-button-background mt-15"
                        style={{ padding: "10px 20px!important", width: "70%!important" }}>50.000 <span className="flex-center ml-5">
                            <img src='/assets/icon/star-dashboard.svg' alt='' />
                        </span></div>
                </div>
            </div>

            <div className={`${styles.menu} pb-5 border-1px-bottom`}>
                <Link href="/dashboard" className={`${styles.menuItemContainer} flex-start ${activeItem === 'ticket' ? styles.active : ''}`} style={{ padding: "12px 0" }} onClick={() => handleItemClick('ticket')}>
                    <TicketIcon />
                    <div className={`ml-10 ${styles.menuItem}`}>Vé đã đặt</div>
                </Link>

                <Link href="/dashboard/my-event" className={`${styles.menuItemContainer} flex-start ${activeItem === 'event' ? styles.active : ''}`} style={{ padding: "12px 0" }} onClick={() => handleItemClick('event')}>
                    <TicketIcon icon="event" />
                    <div className={`ml-10 ${styles.menuItem}`}>Sự kiện của tôi</div>
                </Link>

                <Link href="/dashboard/my-event" className={`${styles.menuItemContainer} flex-start ${activeItem === 'savedEvent' ? styles.active : ''}`} style={{ padding: "12px 0" }} onClick={() => handleItemClick('savedEvent')}>
                    <TicketIcon icon="savedEvent" />
                    <div className={`ml-10 ${styles.menuItem}`}>Sự kiện đã lưu</div>
                </Link>

                <Link href="/dashboard/my-event" className={`${styles.menuItemContainer} flex-start ${activeItem === 'report' ? styles.active : ''}`} style={{ padding: "12px 0" }} onClick={() => handleItemClick('report')}>
                    <TicketIcon icon="report" />
                    <div className={`ml-10 ${styles.menuItem}`}>Quản lí báo cáo</div>
                </Link>
            </div>

            <div className={`${styles.menu} pb-5 mt-20`}>
                <Link href="/dashboard/my-event" className={`${styles.menuItemContainer} flex-start ${activeItem === 'user' ? styles.active : ''}`} style={{ padding: "12px 0" }} onClick={() => handleItemClick('user')}>
                    <TicketIcon icon="user" />
                    <div className={`ml-10 ${styles.menuItem}`}>Tài khoản của tôi</div>
                </Link>
                <Link href="/dashboard/my-event" className={`${styles.menuItemContainer} flex-start ${activeItem === 'logout' ? styles.active : ''}`} style={{ padding: "12px 0" }} onClick={() => handleItemClick('logout')}>
                    <TicketIcon icon="logout" />
                    <div className={`ml-10 ${styles.menuItem}`}>Đăng xuất</div>
                </Link>
            </div>
        </div>
    );
}
