import AdditionalService from "./AdditionalService";
import TicketTypeLine from "./TicketTypeLine";
import TimePicker from "./TimePicker";

export default function BookingForm() {
    return (
        <div className="booking-form border-color">
            <div className="head-booking-form border-background">
                <p className="text-xl-bold white-color">Chọn vé</p>
            </div>
            <div className="content-booking-form">
                <div className="item-line-booking border-color"> <strong className="text-lg-bold white-color">Chọn ngày</strong>
                    <div className="input-calendar" style={{ width: "50%!important" }}>
                        <input style={{ paddingLeft: "30px!important", paddingBottom: "11px!important" }} className="form-control calendar-date main-background border-color white-color" type="text" defaultValue="17/02/2024" />
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5312 1.3828H13.8595V0.703125C13.8595 0.314789 13.5448 0 13.1564 0C12.7681 0 12.4533 0.314789 12.4533 0.703125V1.3828H5.55469V0.703125C5.55469 0.314789 5.2399 0 4.85156 0C4.46323 0 4.14844 0.314789 4.14844 0.703125V1.3828H3.47678C1.55967 1.3828 0 2.94247 0 4.85954V14.5232C0 16.4403 1.55967 18 3.47678 18H14.5313C16.4483 18 18.008 16.4403 18.008 14.5232V4.85954C18.008 2.94247 16.4483 1.3828 14.5312 1.3828ZM3.47678 2.78905H4.14844V4.16014C4.14844 4.54848 4.46323 4.86327 4.85156 4.86327C5.2399 4.86327 5.55469 4.54848 5.55469 4.16014V2.78905H12.4533V4.16014C12.4533 4.54848 12.7681 4.86327 13.1565 4.86327C13.5448 4.86327 13.8596 4.54848 13.8596 4.16014V2.78905H14.5313C15.6729 2.78905 16.6018 3.71788 16.6018 4.85954V5.53124H1.40625V4.85954C1.40625 3.71788 2.33508 2.78905 3.47678 2.78905ZM14.5312 16.5938H3.47678C2.33508 16.5938 1.40625 15.6649 1.40625 14.5232V6.93749H16.6018V14.5232C16.6018 15.6649 15.6729 16.5938 14.5312 16.5938ZM6.24611 9.70312C6.24611 10.0915 5.93132 10.4062 5.54298 10.4062H4.16018C3.77184 10.4062 3.45705 10.0915 3.45705 9.70312C3.45705 9.31479 3.77184 9 4.16018 9H5.54298C5.93128 9 6.24611 9.31479 6.24611 9.70312ZM14.551 9.70312C14.551 10.0915 14.2362 10.4062 13.8479 10.4062H12.4651C12.0767 10.4062 11.7619 10.0915 11.7619 9.70312C11.7619 9.31479 12.0767 9 12.4651 9H13.8479C14.2362 9 14.551 9.31479 14.551 9.70312ZM10.3945 9.70312C10.3945 10.0915 10.0798 10.4062 9.69142 10.4062H8.30862C7.92028 10.4062 7.60549 10.0915 7.60549 9.70312C7.60549 9.31479 7.92028 9 8.30862 9H9.69142C10.0797 9 10.3945 9.31479 10.3945 9.70312ZM6.24611 13.8516C6.24611 14.2399 5.93132 14.5547 5.54298 14.5547H4.16018C3.77184 14.5547 3.45705 14.2399 3.45705 13.8516C3.45705 13.4632 3.77184 13.1484 4.16018 13.1484H5.54298C5.93128 13.1484 6.24611 13.4632 6.24611 13.8516ZM14.551 13.8516C14.551 14.2399 14.2362 14.5547 13.8479 14.5547H12.4651C12.0767 14.5547 11.7619 14.2399 11.7619 13.8516C11.7619 13.4632 12.0767 13.1484 12.4651 13.1484H13.8479C14.2362 13.1484 14.551 13.4632 14.551 13.8516ZM10.3945 13.8516C10.3945 14.2399 10.0798 14.5547 9.69142 14.5547H8.30862C7.92028 14.5547 7.60549 14.2399 7.60549 13.8516C7.60549 13.4632 7.92028 13.1484 8.30862 13.1484H9.69142C10.0797 13.1484 10.3945 13.4632 10.3945 13.8516Z" fill />
                        </svg>
                    </div>
                </div>
                <div className="item-line-booking border-color"> <strong className="text-lg-bold white-color">Chọn giờ</strong>
                    <div className="line-booking-right">
                        <TimePicker time="12:00" />
                        <TimePicker time="17:00" />
                    </div>
                </div>
                <div className="item-line-booking border-color">
                    <div className="box-tickets"><strong className="text-lg-bold white-color">Loại vé</strong>
                        <TicketTypeLine title="Người lớn (trên 18 tuổi)" price="100.000 đ" quantity={3} />
                        <TicketTypeLine title="Trẻ em (13-17 tuổi)" price="80.000 đ" quantity={2} />
                    </div>
                </div>
                <div className="item-line-booking border-color">
                    <div className="box-tickets"><strong className="text-lg-bold white-color">Dịch vụ bổ sung</strong>
                        <AdditionalService title="Bữa ăn nhẹ" price="50.000 đ" />
                        <AdditionalService title="Nước uống" price="10.000 đ" />
                    </div>
                </div>
                <div className="item-line-booking border-color last-item"> <strong className="text-lg-bold white-color">Tổng:</strong>
                    <div className="line-booking-right">
                        <p className="text-xl-bold white-color">200.000 đ</p>
                    </div>
                </div>
                <div className="box-button-book"> <a className="btn btn-book primary-background white-color hover-primary" href="/user/ticket/1">Đặt vé
                    <svg style={{ stroke: "black!important" }} width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15L15 8L8 1M15 8L1 8" stroke strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></a></div>
                <div className="box-need-help"> <a href="#">
                    <svg width={12} height={14} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.83366 3.66667C2.83366 1.92067 4.25433 0.5 6.00033 0.5C7.74633 0.5 9.16699 1.92067 9.16699 3.66667C9.16699 5.41267 7.74633 6.83333 6.00033 6.83333C4.25433 6.83333 2.83366 5.41267 2.83366 3.66667ZM8.00033 7.83333H4.00033C1.88699 7.83333 0.166992 9.55333 0.166992 11.6667C0.166992 12.678 0.988992 13.5 2.00033 13.5H10.0003C11.0117 13.5 11.8337 12.678 11.8337 11.6667C11.8337 9.55333 10.1137 7.83333 8.00033 7.83333Z" fill />
                    </svg>Cần hỗ trợ?</a></div>
            </div>
        </div>
    )
}
