/* eslint max-len: 0 */
import i18next from 'i18next';
import React from 'react';
import {View, Text} from 'react-native';
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        brand_name: 'Nail',
        txtLogin: 'Đăng nhập',
        txtSignUp: 'Đăng kí',
        Loading: 'Loading ...',
        Login: 'User Login',
        home_page: 'Trang chủ',
        reset_password: 'Update password',
        xac_nhan: 'Xác nhận',
        ghi_chu: 'Ghi chú',
        dat_lam_tai_nha: 'Đặt làm tại nhà',
        cua_hang_moi_nhat: 'Cửa hàng mới nhất',
        cua_hang_chat_luong: 'Cửa hàng chất lượng',
        xem_het: 'Xem hết',
        thong_bao: 'Thông báo',
        trang_ca_nhan: 'Trang cá nhân',
        no_answers: 'Không có dịch vụ',
        loading_message: 'Loading ...',
        dich_vu_noi_bat: 'Dịch vụ nôi bật',
        du_lieu_thi_cong: 'Đang trong quá trình thi công!',
        du_lieu_cap_nhat_som: 'Dữ liệu sẽ sơm được cập nhật tại đây.',
        gio_hang_cua_ban: 'Giỏ hàng của bạn',
        tong_tien: 'Tổng (tạm tính)',
        lich_su_giao_dich: 'Lịch sử giao dịch',
        da_den_tay_nguoi_nhan: 'ĐÃ ĐẾN TAY NGƯỜI NHẬN',
        dang_cho_xac_nhan: 'ĐANG CHỜ XÁC NHẬN',
        lien_he_nail_app: 'Liên hệ - CSKH Nail App',
        mo_ta_ho_tro:
          'Nail App sẵn sàng hỗ trợ trong trường hợp quý khách gặp sự cố với đơn hàng.',
        hot_line: 'Hotline:',
        app_phone: '077.976.3016',
        app_email: 'hotro@nail.vn',
        app_email_title: 'Email:',
        ma_don_hang: 'Mã đơn hàng:',
        dat_hang_luc: 'Đặt hàng lúc:',
        tong_tien_d: 'Tổng tiền:',
        den_cua_hang: 'Đến cửa hàng',
        phone_title: 'Số điện thoại:',
        name_title: 'Tên khách hàng: ',
        khach_hang_title: 'Khách Hàng',
        dich_vu: 'Dịch vụ',
        no_data: 'Cửa hàng chưa có bình luận nào',
        gio_mo_cua: 'Giờ mở cửa: ',
        gio_dong_cua: 'Giờ đóng cửa: ',
        khong_co_don_hang: 'Hiện tại bạn chưa có đơn hàng',
        don_hang_cua_ban: 'Đơn hàng của bạn',
        khong_co_thong_bao: 'Hiện tại không có thông báo!',
        dia_chi: 'Địa chỉ',
        danh_gia: 'Chia sẻ nhận xét của bạn',
        dat_lai: 'Đặt lại',
        huy_don: 'Huỷ đơn',
        them_nhan_xet: 'Thêm nhận xét',
        khong_co_du_lieu: 'Không có sản phẩm',
        doi_mat_khau: 'Đổi mật khẩu',
        thong_tin_ca_nhan: 'Thông tin cá nhân',
        thay_doi: 'Thay đổi',
        email: 'Email',
        thong_tin_cua_hang: 'Thông tin cửa hàng',
        goi_ngay: 'Gọi ngay',
        khong_co_ma: 'Không có mã giảm giá nào',
        ma_giam_gia_title: 'Mã giảm giá',
        so_tien_giam: 'Số tiền giảm:',
        ma_giam_gia: 'Mã giảm giá',
        ap_dung: 'Áp dụng',
      },
    },
  },
});

export function t(key, params) {
  if (params) {
    return i18next.t(key, params);
  }
  return i18next.t(key);
}

export const brand = (
  <View>
    <Text>{t('brand_name')}</Text>
  </View>
);
