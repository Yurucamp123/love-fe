'use client'

import React, { useState } from "react";
import MyTicket from "@/components/dashboard/MyTicket";
import InputSearch from "@/components/search/InputSearch";

export default function BookedTicketPage() {
  // State to track selected tab for the top tab group (All, Success, Processing, Canceled)
  const [selectedTabTop, setSelectedTabTop] = useState("all");

  // State to track selected tab for the bottom tab group (Upcoming, Completed)
  const [selectedTabBottom, setSelectedTabBottom] = useState("upcoming");

  // Sample ticket data for each combination of top and bottom tabs
  const tickets = {
    all: {
      upcoming: [
        {
          title: "WORKSHOP 'Sáng Tạo' Góc Quay Nấu Ăn Tại Nhà",
          time: "10:00 - 11:30, 27 tháng 02, 2025",
          address: "53/104 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "100.000",
          imageSrc: "/assets/workshop/explore/detail/1.png",
          link: "room-detail-2.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
        {
          title: "WORKSHOP 'Thực Hành' Cộng Đồng Nấu Ăn Tại Nhà",
          time: "12:00 - 14:00, 28 tháng 02, 2025",
          address: "53/105 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "150.000",
          imageSrc: "/assets/workshop/explore/detail/2.png",
          link: "room-detail-3.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
      ],
      completed: [
        {
          title: "WORKSHOP 'Bí Quyết' Món Ăn Thượng Hạng",
          time: "08:00 - 10:30, 10 tháng 01, 2025",
          address: "53/106 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "200.000",
          imageSrc: "/assets/workshop/explore/detail/3.png",
          link: "room-detail-4.html",
          buttonText: "Xem chi tiết",
          isButtonVisible: true,
        },
      ],
    },
    success: {
      upcoming: [
        {
          title: "WORKSHOP 'Học Cách' Nấu Ăn Chuyên Nghiệp",
          time: "14:00 - 16:00, 15 tháng 03, 2025",
          address: "53/107 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "120.000",
          imageSrc: "/assets/workshop/explore/detail/4.png",
          link: "room-detail-5.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
      ],
      completed: [
        {
          title: "WORKSHOP 'Làm Đẹp' Món Ăn Tốt Cho Sức Khỏe",
          time: "16:00 - 18:00, 12 tháng 01, 2025",
          address: "53/108 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "180.000",
          imageSrc: "/assets/workshop/explore/detail/5.png",
          link: "room-detail-6.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
      ],
    },
    processing: {
      upcoming: [
        {
          title: "WORKSHOP 'Khám Phá' Nghệ Thuật Nấu Ăn",
          time: "10:00 - 12:00, 30 tháng 03, 2025",
          address: "53/109 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "130.000",
          imageSrc: "/assets/workshop/explore/detail/6.png",
          link: "room-detail-7.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
      ],
      completed: [
        {
          title: "WORKSHOP 'Nâng Cao' Món Ăn Đặc Sản",
          time: "11:00 - 13:00, 18 tháng 02, 2025",
          address: "53/110 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "160.000",
          imageSrc: "/assets/workshop/explore/detail/7.png",
          link: "room-detail-8.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
      ],
    },
    canceled: {
      upcoming: [
        {
          title: "WORKSHOP 'Tự Học' Nấu Ăn Hằng Ngày",
          time: "09:00 - 11:00, 20 tháng 04, 2025",
          address: "53/111 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "110.000",
          imageSrc: "/assets/workshop/explore/detail/8.png",
          link: "room-detail-9.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
      ],
      completed: [
        {
          title: "WORKSHOP 'Cộng Đồng' Món Ăn Từ Sự Kiện",
          time: "10:30 - 12:30, 17 tháng 02, 2025",
          address: "53/112 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh",
          price: "190.000",
          imageSrc: "/assets/workshop/explore/detail/9.png",
          link: "room-detail-10.html",
          buttonText: "Đặt ngay",
          isButtonVisible: false,
        },
      ],
    },
  };

  return (
    <div style={{ marginRight: "300px", paddingLeft: "35px", paddingTop: "20px" }}>
      <div className="flex-space pb-20 border-1px-bottom">
        <h4 className="white-color">Vé đã đặt</h4>
        <InputSearch />
      </div>

      {/* Top Tab (All, Success, Processing, Canceled) */}
      <div className="flex-space" style={{ marginTop: "22px" }}>
        {/* Render tabs for All, Success, Processing, Canceled */}
        {["all", "success", "processing", "canceled"].map((tab) => (
          <div key={tab} className="col-lg-3 col-md-4 col-sm-6">
            <div
              className={`${
                selectedTabTop === tab ? "primary-background" : "main-background"
              } mr-15`}
              style={{ cursor: "pointer", padding: "20px 0", borderRadius: "8px" }}
              onClick={() => setSelectedTabTop(tab)}
            >
              <p className="white-color text-lg-bold text-center">
                {tab === "all"
                  ? "Tất cả"
                  : tab === "success"
                  ? "Thành công"
                  : tab === "processing"
                  ? "Đang xử lý"
                  : "Đã hủy"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Tab (Upcoming, Completed) */}
      <div className="mt-25">
        <button
          className={`btn btn-default ${
            selectedTabBottom === "upcoming"
              ? "primary-background border-1px-primary mr-15"
              : "secondary-background mr-15"
          }`}
          style={{ padding: "11px 27px!important" }}
          onClick={() => setSelectedTabBottom("upcoming")}
        >
          Sắp diễn ra
        </button>

        <button
          className={`btn btn-default ${
            selectedTabBottom === "completed"
              ? "primary-background border-1px-primary mr-15"
              : "secondary-background mr-15"
          }`}
          style={{ padding: "11px 27px!important" }}
          onClick={() => setSelectedTabBottom("completed")}
        >
          Đã kết thúc
        </button>
      </div>

      {/* Tickets list */}
      <div className="pt-40 pb-200">
        {tickets[selectedTabTop][selectedTabBottom].map((ticket, index) => (
          <MyTicket
            key={index}
            title={ticket.title}
            time={ticket.time}
            address={ticket.address}
            price={ticket.price}
            imageSrc={ticket.imageSrc}
            link={ticket.link}
            buttonText={ticket.buttonText}
            isButtonVisible={ticket.isButtonVisible}
          />
        ))}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link main-third-background white-color-4"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <svg
                  style={{ stroke: "var(--bg-white-color-4) !important" }}
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" stroke strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link main-third-background white-color-4" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link secondary-background white-color active" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link main-third-background white-color-4" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link main-third-background white-color-4" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link main-third-background white-color-4" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link main-third-background white-color-4" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link main-third-background white-color-4"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">
                <svg
                  style={{ stroke: "var(--bg-white-color-4) !important" }}
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" stroke strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
