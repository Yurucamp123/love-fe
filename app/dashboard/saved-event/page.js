import SavedEvent from '@/components/dashboard/SavedEvent'
import InputSearch from '@/components/search/InputSearch'

export default function SavedEventPage() {
  return (
    <div style={{ marginRight: "300px", paddingLeft: "35px", paddingTop: "20px" }}>
      <div className="flex-space pb-20 border-1px-bottom">
        <h4 className="white-color">Sự kiện đã lưu</h4>
        <InputSearch />
      </div>

      <div className="mt-25">
        <button className="btn btn-default secondary-background mr-15" style={{ padding: "11px 27px!important" }}>
          Sắp diễn ra
        </button>

        <button className="btn btn-default primary-background border-1px-primary" style={{ padding: "11px 27px!important" }}>
          Đã kết thúc
        </button>
      </div>

      <div className="pt-40 pb-200">
        <SavedEvent
          rating={4.96}
          reviews={672}
          title="WORKSHOP 'Sáng Tạo' Góc Quay Nấu Ăn Tại Nhà"
          time="10:00 - 11:30, 27 tháng 02, 2025"
          address="53/104 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh"
          price="100.000"
          imageSrc="/assets/workshop/explore/detail/1.png"
          link="room-detail-2.html"
          buttonText="Đặt ngay"
          isButtonVisible={false}
        />

        <SavedEvent
          rating={4.96}
          reviews={672}
          title="WORKSHOP 'Sáng Tạo' Góc Quay Nấu Ăn Tại Nhà"
          time="10:00 - 11:30, 27 tháng 02, 2025"
          address="53/104 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh"
          price="100.000"
          imageSrc="/assets/workshop/explore/detail/1.png"
          link="room-detail-2.html"
          buttonText="Đặt ngay"
          isButtonVisible={false}
        />

        <SavedEvent
          rating={4.96}
          reviews={672}
          title="WORKSHOP 'Sáng Tạo' Góc Quay Nấu Ăn Tại Nhà"
          time="10:00 - 11:30, 27 tháng 02, 2025"
          address="53/104 Trần Khánh Dư, phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh"
          price="100.000"
          imageSrc="/assets/workshop/explore/detail/1.png"
          link="room-detail-2.html"
          buttonText="Đặt ngay"
          isButtonVisible={false}
        />

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link main-third-background white-color-4" href="#" aria-label="Previous"><span aria-hidden="true">
              <svg style={{ stroke: "var(--bg-white-color-4) !important" }} width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" stroke strokeLinecap="round" strokeLinejoin="round" />
              </svg></span></a></li>
            <li className="page-item"><a className="page-link main-third-background white-color-4" href="#">1</a></li>
            <li className="page-item"><a className="page-link secondary-background white-color active" href="#">2</a></li>
            <li className="page-item"><a className="page-link main-third-background white-color-4" href="#">3</a></li>
            <li className="page-item"><a className="page-link main-third-background white-color-4" href="#">4</a></li>
            <li className="page-item"><a className="page-link main-third-background white-color-4" href="#">5</a></li>
            <li className="page-item"><a className="page-link main-third-background white-color-4" href="#">...</a></li>
            <li className="page-item"><a className="page-link main-third-background white-color-4" href="#" aria-label="Next"><span aria-hidden="true">
              <svg
                style={{ stroke: "var(--bg-white-color-4) !important" }}
                width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" stroke strokeLinecap="round" strokeLinejoin="round" />
              </svg></span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
