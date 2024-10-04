import React from "react";

const TextArea = () => {
  return (
    <section className="about__text pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                It started with a <br /> bang now we are here.
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="about__text wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <p>
              Chào mừng bạn đến với <b>Vòng Vo</b> – nơi bạn tìm thấy những chiếc vòng tay độc đáo, đầy phong cách, dành riêng cho giới trẻ hiện đại!
              </p>

              <p>
              Chúng tôi là một nhóm gồm 5 sinh viên năng động đến từ khóa Toán Tin của Đại học Bách Khoa Hà Nội. Với đam mê công nghệ và mong muốn mang đến những sản phẩm thời trang ấn tượng, chúng tôi đã kết hợp kiến thức chuyên môn và sự sáng tạo để tạo nên <b>Vòng Vo</b> – thương hiệu vòng tay đại diện cho sự cá tính và phong cách riêng biệt.
              </p>

              <p>
              Vòng Vo không chỉ là nơi cung cấp các loại vòng tay đẹp mắt mà còn là thông điệp về sự tự tin và phong cách cá nhân. Từ những thiết kế tối giản đến những sản phẩm mang tính đột phá, chúng tôi tin rằng mỗi chiếc vòng tay đều có thể kể câu chuyện riêng của bạn.
              </p>
              <p>
              Hãy đồng hành cùng chúng tôi và khám phá bộ sưu tập vòng tay mới lạ, độc đáo, phù hợp với xu hướng thời trang trẻ trung. <b>Vòng Vo – Tỏa sáng phong cách của bạn!</b>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
