import{registerMvuSchema as e}from'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';
const t=z,n=(e,t,n)=>Math.max(t,Math.min(n,e)),
o=t.z.enum(['Kháng cự','Dao động','Đắm chìm','Điên cuồng','Viên mãn']),
r=t.z.enum(['Đang phán định','Đang bồi dưỡng','Chưa đạt chuẩn','Đã trưởng thành','Đã hết hạn']),
s=t.z.enum(['Đơn giản','Khó khăn','Chưa định']),
c=t.z.enum(['Chờ phán định','Đồng hành trò chuyện','Ỷ lại tình cảm','Đụng chạm thân thể','Tương tác mờ ám','Tiếp xúc thân mật','Cởi mở cơ thể','Quan hệ tình dục','Nhận thức thân phận','Phục tùng tuyệt đối','Thay thế gia đình']),
u=t.z.enum(['Ở nhà','Ra ngoài','Ngủ say']),
f=t.z.enum(['Phòng khách','Phòng ăn','Nhà bếp','Phòng ngủ chính','Phòng tắm','Phòng Tần Lộ','Phòng Tô Mộng','Phòng nhân vật chính','Bên ngoài']),
l=t.z.object({
  'Phần đầu':t.z.string().default('Không').describe('Phụ kiện tóc, kẹp tóc, v.v.'),
  'Áo':t.z.string().default('Áo cardigan len be'),
  'Quần váy':t.z.string().default('Váy dài xám đậm'),
  'Đồ lót':t.z.object({'Trên':t.z.string().default('Áo lót cotton màu da'),'Dưới':t.z.string().default('Quần lót cotton')}).prefault({}),
  'Tất quần':t.z.string().default('Quần tất màu da'),
  'Giày':t.z.string().default('Dép đi trong nhà'),
  'Áo khoác':t.z.string().default('Không').describe('Áo choàng, khăn choàng, v.v.'),
  'Trang sức':t.z.string().default('Nhẫn cưới').describe('Trang sức, đồng hồ, v.v.'),
  'Phụ kiện đặc biệt':t.z.string().default('Không').describe('Vòng cổ, còng tay, v.v.'),
  'Phong cách tổng thể':t.z.string().default('Vợ hiền tại gia'),
  'Độ hở hang':t.z.enum(['Kín đáo','Bình thường','Mát mẻ','Hở hang','Cực kỳ hở hang']).default('Bình thường'),
  'Độ gọn gàng':t.z.enum(['Gọn gàng','Hơi xộc xệch','Bừa bộn','Hư hại','Áo không che thân']).default('Gọn gàng')
}),
i=t.z.object({
  'Lớp nền':t.z.string().default('Trang điểm nhẹ tự nhiên'),
  'Trang điểm mắt':t.z.string().default('Không'),
  'Son môi':t.z.string().default('Son bóng hồng nhạt'),
  'Phấn má':t.z.string().default('Ửng hồng tự nhiên'),
  'Trang điểm đặc biệt':t.z.string().default('Không').describe('Trang điểm hình xăm, trang điểm vệt nước mắt, v.v.'),
  'Mùi hương':t.z.string().default('Không').describe('Hương nước hoa'),
  'Phong cách tổng thể':t.z.string().default('Tươi tắn tự nhiên'),
  'Mức độ đậm nhạt':t.z.enum(['Mặt mộc','Trang điểm nhẹ','Trang điểm thường ngày','Trang điểm đậm','Trang điểm diêm dúa']).default('Trang điểm nhẹ')
}),
a=t.z.object({
  'Hình xăm':t.z.record(t.z.string(),t.z.string()).prefault({}).describe('Vị trí: Nội dung hình xăm'),
  'Xỏ khuyên':t.z.object({
    'Khuyên tai':t.z.boolean().default(!1),
    'Khuyên nhũ hoa':t.z.boolean().default(!1),
    'Khuyên núm vú':t.z.boolean().default(!1),
    'Khuyên âm vật':t.z.boolean().default(!1),
    'Khuyên lưỡi':t.z.boolean().default(!1),
    'Khuyên rốn':t.z.boolean().default(!1),
    'Khuyên môi âm hộ':t.z.boolean().default(!1),
    'Khác':t.z.array(t.z.string()).default([])
  }).prefault({}),
  'Cải tạo quầng vú':t.z.string().default('Không').describe('Ví dụ: Tăng kích thước, đổi màu, xỏ khuyên, v.v.'),
  'Dấu ấn vĩnh viễn':t.z.array(t.z.string()).default([]).describe('Vết ấn dấu, vết sẹo, v.v.'),
  'Dấu ấn tạm thời':t.z.array(t.z.string()).default([]).describe('Vết hôn, dấu vết tinh dịch, v.v.'),
  'Thay đổi vóc dáng':t.z.string().default('Không').describe('Thay đổi cơ thể do được khai phát')
}),
d=t.z.object({
  'Nội dung':t.z.string().describe('Nguyên văn người chơi nhập, AI không được sửa'),
  'Loại':c.default('Chờ phán định').describe('Trường duy nhất để AI phán định ghi vào'),
  'Trạng thái':r.default('Đang phán định'),
  'Độ khó':s.default('Chưa định'),
  'Số tầng cần':t.z.coerce.number().default(0).describe('Số tầng cần để trưởng thành, sau khi phán định loại sẽ do script thiết lập theo độ khó'),
  'Tiến độ khai phát':t.z.coerce.number().default(0).describe('Tiến độ tầng tích lũy (bao gồm tăng tốc)'),
  'Tầng cấy ghép':t.z.coerce.number().default(-1),
  '_Cưỡng chế cấy ghép':t.z.boolean().default(!1)
}),
h=t.z.object({
  'Nội dung':t.z.string().describe('Hành vi/tư duy đã định hình'),
  'Tầng hình thành':t.z.coerce.number().default(-1)
}),
m=t.z.object({
  'Độ sa đọa':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Độ phụ thuộc nhân vật chính':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(20),
  'Độ phụ thuộc Tô Văn':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(80),
  'Giai đoạn hiện tại':t.z.coerce.number().transform(e=>n(Math.floor(e),1,5)).prefault(1),
  'Tiêu đề giai đoạn':o.default('Kháng cự'),
  'Suy nghĩ hiện tại':t.z.string().default('').describe('Độc thoại nội tâm, AI cập nhật mỗi lượt'),
  'Cảm xúc hiện tại':t.z.string().default('Bình tĩnh'),
  'Vị trí hiện tại':f.default('Phòng khách'),
  'Chi tiết trang phục':l.prefault({}),
  'Chi tiết trang điểm':i.prefault({}),
  'Cải tạo cơ thể':a.prefault({}),
  'Miêu tả khí chất':t.z.string().default('Nội trợ dịu dàng đoan trang'),
  'Danh sách ý niệm':t.z.record(t.z.string(),d).prefault({}),
  'Danh sách thói quen':t.z.array(h).default([]),
  'Danh sách tập tính khắc ấn':t.z.array(h).default([]),
  '_Tầng chú ý trang phục trước':t.z.coerce.number().default(-1),
  'Trạng thái trang bị':t.z.record(t.z.string(),t.z.enum(['Đã mua','Đang trang bị'])).prefault({}),
  '_Thưởng vượt cấp':t.z.coerce.number().default(0),
  '_Thưởng vượt cấp đến tầng':t.z.coerce.number().default(-1),
  '_Độ sa đọa kết toán nghi ngờ':t.z.coerce.number().default(-1),
  '_Ba lần cưỡng chế':t.z.coerce.number().default(0),
  '_Vết nứt đến tầng':t.z.coerce.number().default(-1),
  '_Độ sa đọa kết toán tiền tệ':t.z.coerce.number().default(-1),
  '_Giai đoạn đã thưởng':t.z.coerce.number().default(-1)
}),
b=t.z.object({
  'Có đóng băng không':t.z.boolean().default(!1),
  'Nội dung viện cớ':t.z.string().default(''),
  'Tầng kết thúc đóng băng':t.z.coerce.number().default(-1).describe('Tầng hiện tại >= giá trị này thì giải đông')
}),
p=t.z.object({
  'Có hiệu lực không':t.z.boolean().default(!1),
  'Trạng thái đóng băng':u.default('Ở nhà'),
  'Đóng băng vị trí':f.default('Phòng khách'),
  'Đóng băng nghi ngờ Tần Lộ':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Đóng băng nghi ngờ Tô Mộng':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Đóng băng con trỏ sinh hoạt':t.z.coerce.number().default(-1),
  'Tầng kích hoạt':t.z.coerce.number().default(-1)
}),
g=t.z.object({
  'Trạng thái hiện tại':u.default('Ở nhà'),
  'Vị trí hiện tại':f.default('Phòng khách').describe('Script tính toán theo lịch sinh hoạt các tầng, AI không được sửa'),
  'Cảm xúc hiện tại':t.z.string().default('Bình tĩnh').describe('AI cập nhật mỗi lượt'),
  'Suy nghĩ hiện tại':t.z.string().default('Gần đây trong nhà khá bình yên, Lộ Lộ quán xuyến việc nhà rất chu đáo, bọn trẻ cũng ngoan ngoãn hiểu chuyện.').describe('Độc thoại nội tâm ngôi thứ nhất 60-100 từ, AI cập nhật mỗi lượt'),
  'Nghi ngờ Tần Lộ':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Nghi ngờ Tô Mộng':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Nghi ngờ Tần Lộ đóng băng':b.prefault({}),
  'Nghi ngờ Tô Mộng đóng băng':b.prefault({}),
  'Đóng băng vị trí chỉ số':p.prefault({})
}),
v=t.z.object({
  'Thời gian':t.z.string().default('Sáng sớm').describe('Chỉ hiển thị bầu không khí, AI tự do duy trì theo cốt truyện, script không tham gia tính toán'),
  'Ngày':t.z.string().default('').describe('Chỉ hiển thị bầu không khí, AI cập nhật khi cốt truyện bước sang ngày mới'),
  'Địa điểm':f.default('Phòng khách').describe('AI chọn cảnh hiện tại từ danh sách địa điểm cố định')
}),
E=t.z.object({
  'Mục tiêu':t.z.enum(['Tần Lộ','Tô Mộng']),
  'ID ý niệm':t.z.string(),
  'Nội dung':t.z.string(),
  'Tầng cấy ghép':t.z.coerce.number(),
  'Đã thông báo AI':t.z.boolean().default(!1)
}),
M=t.z.object({
  'Tiền tệ':t.z.coerce.number().transform(e=>Math.max(0,Math.floor(e))).prefault(0),
  'Trạng thái đạo cụ':t.z.record(t.z.string(),t.z.enum(['Chưa mua','Đã mua','Đang dùng'])).prefault({}),
  'Nhân vật hiện tại':t.z.enum(['Tần Lộ','Tô Mộng']).default('Tần Lộ'),
  'Nhân vật có mặt':t.z.object({'Tần Lộ':t.z.boolean().default(!0),'Tô Mộng':t.z.boolean().default(!1)}).prefault({}),
  'Nhật ký cấy ý niệm':t.z.array(E).default([]),
  'Ý niệm liên quan lượt này':t.z.record(t.z.string(),t.z.coerce.number().default(0)).prefault({}),
  '_Đã mặc lần đầu':t.z.record(t.z.string(),t.z.boolean()).prefault({}),
  'Danh sách video':t.z.record(t.z.string(),t.z.object({
    'Tóm tắt':t.z.string().default('').describe('AI lưu trữ: Khái quát khung hình được ghi lại trong vòng 50 từ'),
    'Phạm vi ghi hình':t.z.string().default(''),
    'Trạng thái':t.z.enum(['Chờ tóm tắt','Đã sẵn sàng']).default('Chờ tóm tắt')
  })).prefault({}),
  '_Ghi hình':t.z.object({
    'Đang ghi hình':t.z.boolean().default(!1),
    'Tầng bắt đầu':t.z.coerce.number().default(-1),
    'Mục tiêu':t.z.enum(['Tần Lộ','Tô Mộng']).default('Tần Lộ')
  }).prefault({}),
  '_Tô Mộng dẫn trường':t.z.object({
    'Số tầng còn lại':t.z.coerce.number().default(-1),
    'Đã kích hoạt':t.z.boolean().default(!1)
  }).prefault({}),
  '_Mốc ngắt quãng đã kích':t.z.record(t.z.string(),t.z.boolean()).prefault({}),
  '_Dư chấn ngắt đến tầng':t.z.coerce.number().default(-1),
  '_Hồi chiêu ngắt đến tầng':t.z.coerce.number().default(-1),
  '_Hạn ngạch khắc ấn':t.z.coerce.number().default(0),
  '_Góc nhìn Tô Văn':t.z.object({
    'Chờ xem':t.z.boolean().default(!1),
    'Số tầng còn lại':t.z.coerce.number().default(0),
    'Tổng số tầng':t.z.coerce.number().default(3),
    'Mục tiêu':t.z.enum(['Tần Lộ','Tô Mộng']).default('Tần Lộ'),
    'Cấp độ':t.z.coerce.number().default(0),
    'Tầng xử lý lần trước':t.z.coerce.number().default(-1)
  }).prefault({}),
  '_Thử nghiệm max sao':t.z.boolean().default(!1),
  '_Kết cục xấu':t.z.string().default(''),
  '_Sự kiện đạo cụ chờ gửi':t.z.string().default(''),
  '_Sự kiện đã truyền':t.z.object({
    'Tầng':t.z.coerce.number().default(-1),
    'Nội dung':t.z.string().default('')
  }).prefault({}),
  '_Tầng dùng tiêu hao phẩm trước':t.z.record(t.z.string(),t.z.coerce.number()).prefault({}),
  '_Khóa có mặt':t.z.boolean().default(!1),
  '_Con trỏ sinh hoạt Tô Văn':t.z.coerce.number().default(11),
  '_Tầng xử lý lần trước':t.z.coerce.number().default(-1)
}),
y=t.z.object({
  'Thế giới':v.prefault({}),
  'Trạng thái Tần Lộ':m.prefault({'Suy nghĩ hiện tại':'Hôm nay cũng là một ngày bình dị êm đềm, cơm tối đã nấu xong chờ mọi người về. Con trai dạo này có vẻ chững chạc hơn rồi, không cần mình phải bận tâm nhiều nữa.'}),
  'Trạng thái Tô Mộng':m.prefault({
    'Độ sa đọa':0,
    'Độ phụ thuộc nhân vật chính':25,
    'Độ phụ thuộc Tô Văn':70,
    'Chi tiết trang phục':{
      'Phần đầu':'Dây buộc tóc đen',
      'Áo':'Áo sơ mi đũi trắng',
      'Quần váy':'Quần jeans xanh nhạt',
      'Đồ lót':{'Trên':'Áo lót ren trắng','Dưới':'Quần lót cotton trắng'},
      'Tất quần':'Tất ngắn trắng',
      'Giày':'Giày vải',
      'Phong cách tổng thể':'Trẻ trung năng động'
    },
    'Chi tiết trang điểm':{
      'Lớp nền':'Mặt mộc',
      'Son môi':'Không',
      'Phấn má':'Không',
      'Mức độ đậm nhạt':'Mặt mộc'
    },
    'Suy nghĩ hiện tại':'Ở nhà có chút buồn chán, hôm nay em trai cũng ở đây, thỉnh thoảng nói vài câu cũng được.',
    'Miêu tả khí chất':'Nữ sinh đại học hoạt bát cởi mở',
    'Vị trí hiện tại':'Phòng Tô Mộng'
  }),
  'Trạng thái Tô Văn':g.prefault({}),
  'Hệ thống':M.prefault({})
});

const j=[{
  'Giai đoạn':1,
  'Tiêu đề giai đoạn':'Kháng cự',
  'Phạm vi độ sa đọa':[0,19],
  'Ràng buộc':{
    'Độ hở hang tối thiểu':'Kín đáo',
    'Phạm vi độ hở hang':['Kín đáo','Bình thường'],
    'Mức độ trang điểm tối thiểu':'Mặt mộc',
    'Phạm vi mức độ trang điểm':['Mặt mộc','Trang điểm nhẹ'],
    'Cho phép phụ kiện đặc biệt':!1,
    'Cho phép cải tạo cơ thể':!1
  },
  'Ngoại hình mặc định':{
    'Trang phục':{
      'Phần đầu':'Không',
      'Áo':'Áo cardigan len be',
      'Quần váy':'Váy dài xám đậm',
      'Đồ lót trên':'Áo lót cotton màu da',
      'Đồ lót dưới':'Quần lót cotton',
      'Tất quần':'Quần tất màu da',
      'Giày':'Dép đi trong nhà',
      'Áo khoác':'Không',
      'Trang sức':'Nhẫn cưới',
      'Phụ kiện đặc biệt':'Không',
      'Phong cách tổng thể':'Vợ hiền tại gia',
      'Độ hở hang':'Bình thường',
      'Độ gọn gàng':'Gọn gàng'
    },
    'Trang điểm':{
      'Lớp nền':'Trang điểm nhẹ tự nhiên',
      'Trang điểm mắt':'Không',
      'Son môi':'Son bóng hồng nhạt',
      'Phấn má':'Ửng hồng tự nhiên',
      'Trang điểm đặc biệt':'Không',
      'Mức độ đậm nhạt':'Trang điểm nhẹ',
      'Phong cách tổng thể':'Tươi tắn tự nhiên'
    },
    'Miêu tả khí chất':'Nội trợ dịu dàng đoan trang'
  },
  'Hệ số chỉnh thời gian':1.2
},{
  'Giai đoạn':2,
  'Tiêu đề giai đoạn':'Dao động',
  'Phạm vi độ sa đọa':[20,39],
  'Ràng buộc':{
    'Độ hở hang tối thiểu':'Bình thường',
    'Phạm vi độ hở hang':['Bình thường','Mát mẻ'],
    'Mức độ trang điểm tối thiểu':'Trang điểm nhẹ',
    'Phạm vi mức độ trang điểm':['Trang điểm nhẹ','Trang điểm thường ngày'],
    'Cho phép phụ kiện đặc biệt':!1,
    'Cho phép cải tạo cơ thể':!1
  },
  'Ngoại hình mặc định':{
    'Trang phục':{
      'Phần đầu':'Mái tóc xoăn nhẹ thoáng nét quyến rũ',
      'Áo':'Áo len dệt cổ chữ V',
      'Quần váy':'Chân váy ngắn ngang gối',
      'Đồ lót trên':'Áo ngực ren nửa quả',
      'Đồ lót dưới':'Quần lót tam giác bằng ren',
      'Tất quần':'Quần tất đen',
      'Giày':'Giày gót thấp',
      'Áo khoác':'Không',
      'Trang sức':'Nhẫn cưới, dây chuyền tối giản',
      'Phụ kiện đặc biệt':'Không',
      'Phong cách tổng thể':'Bắt đầu chú trọng nét gợi cảm',
      'Độ hở hang':'Mát mẻ',
      'Độ gọn gàng':'Hơi xộc xệch'
    },
    'Trang điểm':{
      'Lớp nền':'Lớp nền bóng nhẹ',
      'Trang điểm mắt':'Phấn mắt tông màu đất, kẻ mắt',
      'Son môi':'Son bóng hồng',
      'Phấn má':'Sắc đào ửng hồng tự nhiên',
      'Trang điểm đặc biệt':'Không',
      'Mức độ đậm nhạt':'Trang điểm thường ngày',
      'Phong cách tổng thể':'Đậm nét nữ tính'
    },
    'Miêu tả khí chất':'Nét quyến rũ đằm thắm của phụ nữ trưởng thành'
  },
  'Hệ số chỉnh thời gian':1
},{
  'Giai đoạn':3,
  'Tiêu đề giai đoạn':'Đắm chìm',
  'Phạm vi độ sa đọa':[40,59],
  'Ràng buộc':{
    'Độ hở hang tối thiểu':'Mát mẻ',
    'Phạm vi độ hở hang':['Mát mẻ','Hở hang'],
    'Mức độ trang điểm tối thiểu':'Trang điểm thường ngày',
    'Phạm vi mức độ trang điểm':['Trang điểm thường ngày','Trang điểm đậm'],
    'Cho phép phụ kiện đặc biệt':!0,
    'Cho phép cải tạo cơ thể':!1
  },
  'Ngoại hình mặc định':{
    'Trang phục':{
      'Phần đầu':'Mái tóc dài uốn lượn được chăm chút kỹ lưỡng',
      'Áo':'Áo sơ mi voan mỏng bán trong suốt',
      'Quần váy':'Chân váy siêu ngắn ôm sát mông',
      'Đồ lót trên':'Áo ngực khiêu dâm ren khoét rỗng',
      'Đồ lót dưới':'Quần lót chữ T',
      'Tất quần':'Tất lưới có kẹp đeo chân',
      'Giày':'Giày cao gót nhọn',
      'Áo khoác':'Không',
      'Trang sức':'Vòng cổ dạng choker, khuyên tai',
      'Phụ kiện đặc biệt':'Xích đeo eo',
      'Phong cách tổng thể':'Gợi cảm mê hoặc',
      'Độ hở hang':'Hở hang',
      'Độ gọn gàng':'Hơi xộc xệch'
    },
    'Trang điểm':{
      'Lớp nền':'Lớp phấn nền dày',
      'Trang điểm mắt':'Trang điểm mắt khói, mi giả',
      'Son môi':'Son môi đỏ tươi',
      'Phấn má':'Phấn má hồng rõ nét',
      'Trang điểm đặc biệt':'Không',
      'Mức độ đậm nhạt':'Trang điểm đậm',
      'Phong cách tổng thể':'Gợi cảm yêu kiều'
    },
    'Miêu tả khí chất':'Người đàn bà yêu kiều đầy sức cám dỗ'
  },
  'Hệ số chỉnh thời gian':.8
},{
  'Giai đoạn':4,
  'Tiêu đề giai đoạn':'Điên cuồng',
  'Phạm vi độ sa đọa':[60,79],
  'Ràng buộc':{
    'Độ hở hang tối thiểu':'Hở hang',
    'Phạm vi độ hở hang':['Hở hang','Cực kỳ hở hang'],
    'Mức độ trang điểm tối thiểu':'Trang điểm đậm',
    'Phạm vi mức độ trang điểm':['Trang điểm đậm','Trang điểm diêm dúa'],
    'Cho phép phụ kiện đặc biệt':!0,
    'Cho phép cải tạo cơ thể':!0
  },
  'Ngoại hình mặc định':{
    'Trang phục':{
      'Phần đầu':'Mái tóc dài rối bời ẩm ướt',
      'Áo':'Chỉ dán miếng dán ngực hoặc bao nhũ hoa trong suốt',
      'Quần váy':'Mảnh vải dường như không tồn tại',
      'Đồ lót trên':'Không',
      'Đồ lót dưới':'Không',
      'Tất quần':'Tất lưới rách tả tơi',
      'Giày':'Giày siêu cao gót hoặc chân trần',
      'Áo khoác':'Không',
      'Trang sức':'Vòng cổ, còng tay, lắc chân',
      'Phụ kiện đặc biệt':'Body painting, phụ kiện gợi tình, dâm văn',
      'Phong cách tổng thể':'Hoàn toàn sa đọa',
      'Độ hở hang':'Cực kỳ hở hang',
      'Độ gọn gàng':'Bừa bộn'
    },
    'Trang điểm':{
      'Lớp nền':'Dày nhưng đã loang lổ',
      'Trang điểm mắt':'Trang điểm đậm bị lem, mi giả rơi rụng',
      'Son môi':'Son môi đỏ thẫm tràn viền',
      'Phấn má':'Gương mặt ửng hồng dị thường',
      'Trang điểm đặc biệt':'Hiệu ứng trang điểm vệt nước mắt',
      'Mức độ đậm nhạt':'Trang điểm diêm dúa',
      'Phong cách tổng thể':'Dâm đãng sa đọa'
    },
    'Miêu tả khí chất':'Người đàn bà dâm đãng hoàn toàn chìm đắm'
  },
  'Đề xuất cải tạo cơ thể':{
    'Hình xăm có thể xuất hiện':['Dâm văn bụng dưới','Dấu ấn đùi trong','Nơ bướm sau thắt lưng','Hình xăm tử cung'],
    'Xỏ khuyên có thể xuất hiện':['Khuyên núm vú','Khuyên rốn','Khuyên âm vật'],
    'Dấu ấn vĩnh viễn':['Ấn dấu nơi kín đáo','Dấu ấn quyền sở hữu']
  },
  'Hệ số chỉnh thời gian':.6
},{
  'Giai đoạn':5,
  'Tiêu đề giai đoạn':'Viên mãn',
  'Phạm vi độ sa đọa':[80,100],
  'Ràng buộc':{
    'Độ hở hang tối thiểu':'Kín đáo',
    'Phạm vi độ hở hang':['Kín đáo','Bình thường'],
    'Mức độ trang điểm tối thiểu':'Mặt mộc',
    'Phạm vi mức độ trang điểm':['Mặt mộc','Trang điểm nhẹ'],
    'Cho phép phụ kiện đặc biệt':!0,
    'Cho phép cải tạo cơ thể':!0
  },
  'Ngoại hình mặc định':{
    'Trang phục':{
      'Phần đầu':'Kiểu tóc được tạo hình hoàn hảo',
      'Áo':'Bộ đồ mặc nhà đoan trang trang nhã',
      'Quần váy':'Váy áo đoan chính nhã nhặn',
      'Đồ lót trên':'Áo ngực khiêu dâm cao cấp đặt may riêng (ẩn)',
      'Đồ lót dưới':'Quần lót khiêu dâm cao cấp đặt may riêng (ẩn)',
      'Tất quần':'Quần tất thượng hạng',
      'Giày':'Giày trang nhã thoải mái',
      'Áo khoác':'Áo khoác nhã nhặn',
      'Trang sức':'Nhẫn cưới, trang sức tinh xảo',
      'Phụ kiện đặc biệt':'Cải tạo cơ thể được giấu kín hoàn toàn',
      'Phong cách tổng thể':'Vợ hiền hoàn mỹ, bên trong ẩn chứa tột cùng dâm đãng',
      'Độ hở hang':'Bình thường',
      'Độ gọn gàng':'Gọn gàng'
    },
    'Trang điểm':{
      'Lớp nền':'Lớp nền tự nhiên không tì vết',
      'Trang điểm mắt':'Trang điểm mắt dịu dàng tươi tắn',
      'Son môi':'Màu môi mềm mại tự nhiên',
      'Phấn má':'Sắc ửng hồng tự nhiên khỏe khoắn',
      'Trang điểm đặc biệt':'Không (che giấu hoàn hảo mọi dấu vết)',
      'Mức độ đậm nhạt':'Trang điểm nhẹ',
      'Phong cách tổng thể':'Tươi tắn tự nhiên'
    },
    'Miêu tả khí chất':'Bề ngoài hiền thục, nội tâm tột cùng dâm đãng'
  },
  'Đề xuất cải tạo cơ thể':{
    'Hình xăm có thể xuất hiện':['Mạng lưới dâm văn ẩn khắp toàn thân','Trận đồ dâm dật hoàn chỉnh nơi tử cung','Huy hiệu quyền sở hữu hoàn chỉnh'],
    'Xỏ khuyên có thể xuất hiện':['Mọi vị trí xỏ khuyên thông thường','Xỏ khuyên dạng liên kết đặt làm riêng'],
    'Dấu ấn vĩnh viễn':['Khắc ấn nô lệ hoàn chỉnh','Ấn dấu quyền sở hữu vĩnh viễn','Dấu ấn khế ước linh hồn']
  },
  'Hệ số chỉnh thời gian':.5
}];

function A(e){return j.find(t=>t['Giai đoạn']===e)}
function I(e){for(const t of j){const[n,o]=t['Phạm vi độ sa đọa'];if(e>=n&&e<=o)return t['Giai đoạn']}return 5}
function O(e){const t=A(e);return t?.['Tiêu đề giai đoạn']||'Kháng cự'}

const D=Object.fromEntries([
  {名称:'Đồ lót ren',分类:'Trang bị',槽位:'Nội y',阶段门槛:2,类型倾向:['Cởi mở cơ thể'],加速:.5,风险:1,越级钥匙:!1,价格:150,简介:'Bí mật ôm sát cơ thể, chỉ một mình nàng hay biết',首穿:'Nàng giấu chồng, mặc bộ đồ lót ren bạn mua sát vào người - cả ngày đều bồn chồn cảm nhận sự hiện diện của nó'},
  {名称:'Đồ lót khiêu dâm xẻ tà',分类:'Trang bị',槽位:'Nội y',阶段门槛:3,类型倾向:['Cởi mở cơ thể','Quan hệ tình dục'],加速:1,风险:2,越级钥匙:!0,价格:300,简介:'Khoác nó lên người, một vài ý nghĩ sẽ không còn xa vời nữa',首穿:'Nàng khóa chặt cửa phòng mặc thử bộ đồ lót xẻ tà ấy, đứng trước gương hồi lâu, khuôn mặt càng lúc càng đỏ bừng'},
  {名称:'Miếng dán ngực tàng hình',分类:'Trang bị',槽位:'Nội y',阶段门槛:4,类型倾向:['Quan hệ tình dục'],加速:1.5,风险:3,越级钥匙:!0,价格:500,简介:'Từ nay giữa nàng và "thả rông" chỉ còn cách một lớp dán mỏng manh',首穿:'Lần đầu tiên nàng không mặc áo ngực, chỉ dán miếng dán ngực xuất hiện trước mặt người nhà, mỗi bước đi tim đều đập thình thịch như đánh trống'},
  {名称:'Quần lọt khe không đường may',分类:'Trang bị',槽位:'Nội y',阶段门槛:2,类型倾向:['Cởi mở cơ thể'],加速:.5,风险:1,越级钥匙:!1,价格:180,简介:'Một sợi dây gần như không tồn tại, nhưng luôn nhắc nhở nàng về sự hiện diện của nó',首穿:'Nàng mặc chiếc quần lọt khe mỏng manh ấy làm việc nhà, cảm giác cọ xát lạ lẫm khiến nàng cả ngày tâm thần bất định'},
  {名称:'Bikini khiêu dâm ba điểm',分类:'Trang bị',槽位:'Nội y',阶段门槛:3,类型倾向:['Cởi mở cơ thể','Quan hệ tình dục'],加速:1,风险:2,越级钥匙:!1,价格:350,简介:'Ba mảnh vải nhỏ và vài sợi dây mảnh, mặc vào vốn dĩ chẳng phải để che chắn',首穿:'Nàng khóa cửa mặc bộ ba điểm vào, nghiêng người trước gương - phần vải che đậy ít đến đáng thương, nhưng nàng không hề cởi ra ngay'},
  {名称:'Quần tất xẻ đáy',分类:'Trang bị',槽位:'Nội y',阶段门槛:4,类型倾向:['Quan hệ tình dục'],加速:1.5,风险:3,越级钥匙:!0,价格:480,简介:'Nhìn bề ngoài là chiếc quần tất trang nhã, chỉ có nàng mới biết chỗ xẻ mở kia',首穿:'Nàng xỏ vào đôi quần tất ấy, bề ngoài không khác gì ngày thường - chỉ riêng nàng cảm nhận được từng luồng gió mát lạnh từ khe hở mỗi khi cất bước'},
  {名称:'Đồ định hình liền thân',分类:'Trang bị',槽位:'Nội y',阶段门槛:2,类型倾向:['Cởi mở cơ thể'],加速:.5,风险:1,越级钥匙:!1,价格:200,简介:'Bó chặt từ cổ đến hông, phô bày trọn vẹn từng đường cong'},
  {名称:'Đai đeo tất đen quyến rũ',分类:'Trang bị',槽位:'Nội y',阶段门槛:3,类型倾向:['Tương tác mờ ám','Quan hệ tình dục'],加速:1,风险:2,越级钥匙:!1,价格:320,简介:'Tất dài cùng dải đai mảnh nơi thắt lưng, là ám hiệu kinh điển nhất'},
  {名称:'Quần lót chuỗi ngọc trai',分类:'Trang bị',槽位:'Nội y',阶段门槛:4,类型倾向:['Quan hệ tình dục'],加速:1.5,风险:3,越级钥匙:!0,价格:520,简介:'Một chuỗi ngọc trai thay thế lớp vải mềm, mỗi bước đi đều là một sự tra tấn ngọt ngào'},
  {名称:'Lưới liền thân khoét rỗng',分类:'Trang bị',槽位:'Nội y',阶段门槛:5,类型倾向:['Quan hệ tình dục','Phục tùng tuyệt đối'],加速:2,风险:3,越级钥匙:!0,价格:800,简介:'Nói là mặc vào, chẳng bằng nói là bị giăng lưới giữ chặt'},
  {名称:'Váy liền thân ôm dáng',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:1,类型倾向:['Đụng chạm thân thể'],加速:.5,风险:0,越级钥匙:!1,价格:100,简介:'Tôn lên vóc dáng vừa vặn hoàn hảo, khiến sự tiếp cận trở nên tự nhiên',首穿:'Nàng diện chiếc váy bạn chọn rồi ngắm mình trong gương, đã lâu lắm rồi nàng mới thấy bản thân vẫn còn rất đẹp'},
  {名称:'Áo len cổ trễ',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:3,类型倾向:['Tương tác mờ ám','Đụng chạm thân thể'],加速:1,风险:2,越级钥匙:!1,价格:250,简介:'Mỗi khoảnh khắc cúi người đều là một lời gợi ý',首穿:'Nàng ngập ngừng rất lâu rồi mới mặc chiếc áo len cổ trễ ấy vào, trước khi ra cửa đã kéo lại cổ áo đến ba lần'},
  {名称:'Váy ngủ xuyên thấu',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:4,类型倾向:['Tương tác mờ ám','Cởi mở cơ thể'],加速:1.5,风险:3,越级钥匙:!0,价格:450,简介:'Mái ấm về đêm, từ nay đã mang một tầng ý nghĩa khác',首穿:'Đêm khuya, nàng mặc chiếc váy ngủ nửa kín nửa hở bước ra khỏi phòng rót nước, biết rõ bạn có thể sẽ nhìn thấy'},
  {名称:'Bộ đồ yoga bó sát',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:2,类型倾向:['Đụng chạm thân thể','Tương tác mờ ám'],加速:.5,风险:1,越级钥匙:!1,价格:200,简介:'"Tập thể dục tại nhà" là cái cớ hoàn hảo nhất, đường cong là ngôn ngữ tuyệt vời nhất',首穿:'Nàng thay bộ đồ yoga ra phòng khách giãn cơ, lớp vải bó sát phác họa từng đường cong - nàng khẽ bảo chỉ là muốn rèn luyện thân thể'},
  {名称:'Áo lửng hở eo',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:3,类型倾向:['Tương tác mờ ám'],加速:1,风险:2,越级钥匙:!1,价格:280,简介:'Tuổi này rồi còn mặc thứ này sao? Nàng đắn đo rất lâu, nhưng rốt cuộc vẫn mặc',首穿:'Lần đầu tiên nàng mặc chiếc áo ngắn lộ eo, đứng trước gương ngắm nghía vùng bụng mãi - "Liệu có trẻ con quá không..." Miệng nói vậy, nhưng không hề cởi ra'},
  {名称:'Tạp dề trần trụi',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:4,类型倾向:['Cởi mở cơ thể','Quan hệ tình dục'],加速:1.5,风险:3,越级钥匙:!0,价格:520,简介:'Cách mặc nguy hiểm nhất nơi gian bếp, phía sau lưng phơi bày không sót chút gì',首穿:'Nhân lúc nhà chỉ có hai người, nàng chỉ thắt đúng chiếc tạp dề đứng nấu ăn - khoảnh khắc nàng xoay người múc canh, bóng lưng trần trụi khiến không khí như ngưng đọng'},
  {名称:'Đồ mặc nhà đôi',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:1,类型倾向:['Đồng hành trò chuyện','Ỷ lại tình cảm'],加速:.5,风险:0,越级钥匙:!1,价格:120,简介:'Bộ còn lại nằm ngay ngắn trong tủ của bạn - bí mật ngầm hiểu của hai người trong nhà'},
  {名称:'Quần short ôm mông',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:2,类型倾向:['Tương tác mờ ám'],加速:.5,风险:1,越级钥匙:!1,价格:220,简介:'Đôi chân dài miên man cùng bờ mông tròn trịa không chút giấu giếm'},
  {名称:'Sườn xám xẻ tà cao',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:3,类型倾向:['Tương tác mờ ám','Cởi mở cơ thể'],加速:1,风险:2,越级钥匙:!1,价格:350,简介:'Bước một bước tà váy trượt dài lên tận đùi - nét cổ điển là lớp ngụy trang tuyệt hảo'},
  {名称:'Áo sơ mi trắng của anh',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:4,类型倾向:['Thay thế gia đình','Nhận thức thân phận'],加速:1.5,风险:3,越级钥匙:!0,价格:480,简介:'Chiếc áo lấy từ tủ của bạn - vạt áo vừa đủ che đi chỗ nhạy cảm, trên người chỉ mặc duy nhất chiếc áo này'},
  {名称:'Váy lụa đỏ rượu vang',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:3,类型倾向:['Tương tác mờ ám'],加速:1,风险:1,越级钥匙:!1,价格:320,简介:'Chất lụa bóng bẩy tôn lên nước da tuyệt đẹp - đẹp đến mức người nhà ai cũng phải chú ý'},
  {名称:'Váy cổ cao cài nút kín',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:5,类型倾向:['Thay thế gia đình','Quan hệ tình dục'],加速:2,风险:1,越级钥匙:!1,价格:750,简介:'Vẻ đoan trang không tì vết trong mắt người khác - vị trí dây kéo ẩn bên hông, chỉ có bạn biết'},
  {名称:'Vòng tay chỉ đỏ',分类:'Trang bị',槽位:'Trang sức',阶段门槛:1,类型倾向:['Ỷ lại tình cảm'],加速:.5,风险:0,越级钥匙:!1,价格:100,简介:'Chính tay bạn đeo cho nàng, nàng chẳng nỡ tháo ra',首穿:'Bạn thắt sợi chỉ đỏ lên cổ tay nàng, nàng cúi đầu nhìn thật lâu, khóe môi không giấu nổi nụ cười'},
  {名称:'Vòng choker ôm sát cổ',分类:'Trang bị',槽位:'Trang sức',阶段门槛:3,类型倾向:['Phục tùng tuyệt đối'],加速:1,风险:1,越级钥匙:!1,价格:300,简介:'Giống vòng cổ thú cưng mà lại không phải, cảm giác quy thuộc dán chặt lấy cần cổ',首穿:'Nàng đeo chiếc choker ấy vào, ngón tay miết nhẹ qua chốt khóa trước cổ họng, trong lòng dấy lên một cảm giác khó tả - "Thuộc về"'},
  {名称:'Nhẫn trơn đơn giản',分类:'Trang bị',槽位:'Trang sức',阶段门槛:5,类型倾向:['Thay thế gia đình'],加速:1.5,风险:2,越级钥匙:!0,价格:600,简介:'Bạn tặng. Đeo nó lên đồng nghĩa với điều gì, nàng hiểu rõ hơn bất kỳ ai',首穿:'Nàng tháo nhẫn cưới xuống, lồng chiếc nhẫn trơn bạn tặng vào ngón áp út - ngắm nhìn bàn tay ấy thật lâu'},
  {名称:'Dây chuyền đôi',分类:'Trang bị',槽位:'Trang sức',阶段门槛:2,类型倾向:['Ỷ lại tình cảm','Nhận thức thân phận'],加速:.5,风险:0,越级钥匙:!1,价格:150,简介:'Chiếc còn lại trong cặp đang nằm trên cổ bạn',首穿:'Nàng đeo dây chuyền vào mới nhận ra đây là đồ đôi - chiếc kia đang ở trên người bạn. Nàng chạm vào mặt dây ngẩn ngơ một lát, không hề tháo xuống'},
  {名称:'Xích đeo rốn',分类:'Trang bị',槽位:'Trang sức',阶段门槛:3,类型倾向:['Cởi mở cơ thể'],加速:1,风险:1,越级钥匙:!1,价格:280,简介:'Sợi xích mảnh giấu dưới lớp áo, dán sát vào bụng dưới lành lạnh',首穿:'Nàng quấn sợi xích mảnh quanh eo, kéo áo xuống là chẳng ai thấy được - nhưng chính vì không thấy, nó mới giống một bí mật'},
  {名称:'Bông tai ngọc trai',分类:'Trang bị',槽位:'Trang sức',阶段门槛:1,类型倾向:['Ỷ lại tình cảm'],加速:.5,风险:0,越级钥匙:!1,价格:120,简介:'Nét dịu dàng đung đưa bên vành tai, là do bạn tự tay chọn'},
  {名称:'Lắc chân thanh mảnh',分类:'Trang bị',槽位:'Trang sức',阶段门槛:2,类型倾向:['Tương tác mờ ám','Tiếp xúc thân mật'],加速:.5,风险:1,越级钥匙:!1,价格:180,简介:'Một vệt ánh bạc nơi mắt cá chân, chỉ khi cúi đầu mới nhìn thấy'},
  {名称:'Dây chuyền xương quai xanh hoa hồng',分类:'Trang bị',槽位:'Trang sức',阶段门槛:3,类型倾向:['Tương tác mờ ám'],加速:1,风险:2,越级钥匙:!1,价格:300,简介:'Một đóa hoa hồng vương nơi hõm xương quai xanh, dẫn dụ ánh nhìn hạ xuống'},
  {名称:'Lắc chân lục lạc',分类:'Trang bị',槽位:'Trang sức',阶段门槛:4,类型倾向:['Phục tùng tuyệt đối'],加速:1.5,风险:2,越级钥匙:!1,价格:480,简介:'Mỗi bước đi một tiếng reo - vị trí của nàng, bạn luôn nắm rõ'},
  {名称:'Vòng cổ da',分类:'Trang bị',槽位:'Trang sức',阶段门槛:4,类型倾向:['Phục tùng tuyệt đối'],加速:1.5,风险:3,越级钥匙:!0,价格:650,简介:'Không phải vòng cổ trang sức - đeo nó mang ý nghĩa gì, nàng sẽ dần hiểu ra'},
  {名称:'Nước hoa sương mờ',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:1,类型倾向:['Ỷ lại tình cảm'],加速:.5,风险:0,越级钥匙:!1,价格:100,简介:'Mùi hương thoang thoảng như có như không, rốt cuộc là xịt vì ai',首穿:'Nàng thử lọ nước hoa ấy lên cổ tay, trước khi ra ngoài lại dặm thêm một chút sau gáy - bình thường nàng chưa bao giờ làm vậy'},
  {名称:'Son đỏ thuần',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:3,类型倾向:['Tương tác mờ ám'],加速:1,风险:1,越级钥匙:!1,价格:250,简介:'Màu son này, không phải đánh cho chồng xem',首穿:'Nàng đứng trước gương thoa màu son đỏ rực, khẽ mím môi - người phụ nữ trong gương xa lạ nhưng lại tràn đầy sức sống'},
  {名称:'Trang điểm dạ tiệc ma mị',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:4,类型倾向:['Tương tác mờ ám','Quan hệ tình dục'],加速:1.5,风险:2,越级钥匙:!1,价格:450,简介:'Nét vẽ hất nhẹ nơi đuôi mắt, phác họa nên dục vọng',首穿:'Nàng làm theo hướng dẫn vẽ một kiểu trang điểm dạ tiệc chưa từng thử, đuôi mắt xếch nhẹ, sắc môi đậm đà - nàng biết tối nay mình muốn cho ai ngắm'},
  {名称:'Móng tay đỏ tươi',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:2,类型倾向:['Tương tác mờ ám'],加速:.5,风险:0,越级钥匙:!1,价格:150,简介:'Mười ngón tay đỏ rực, khi làm việc nhà trông vô cùng nổi bật',首穿:'Nàng sơn xong bộ móng đỏ thẫm, lúc hong khô chợt nghĩ - đôi tay này ngày mai còn phải nấu cơm cho cả nhà. Nghĩ đến đó, vành tai nàng khẽ nóng lên'},
  {名称:'Nước hoa kích dục',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:4,类型倾向:['Quan hệ tình dục'],加速:1.5,风险:1,越级钥匙:!1,价格:480,简介:'Xịt sau tai và xương quai xanh, mùi hương chỉ phát huy tác dụng với người đến đủ gần',首穿:'Nàng xịt lọ nước hoa ấy ra sau gáy và xương quai xanh, hương thơm ngòn ngọt lan tỏa trên làn da - chỉ ai áp sát thật gần mới ngửi thấy'},
  {名称:'Son bóng mọng nước',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:2,类型倾向:['Tiếp xúc thân mật'],加速:.5,风险:1,越级钥匙:!1,价格:160,简介:'Đôi môi trông căng mọng mềm mại, khiến người ta chỉ muốn nếm thử'},
  {名称:'Trang điểm mắt hoa đào',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:3,类型倾向:['Tương tác mờ ám','Ỷ lại tình cảm'],加速:1,风险:1,越级钥匙:!1,价格:260,简介:'Sắc hồng loang nhẹ nơi đuôi mắt, nhìn ai cũng như chan chứa ân tình'},
  {名称:'Sữa tắm đồng hương',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:5,类型倾向:['Nhận thức thân phận','Phục tùng tuyệt đối'],加速:2,风险:3,越级钥匙:!1,价格:680,简介:'Dùng chung một chai với bạn - từ nay trên người nàng ngập tràn mùi hương của bạn, loại mùi không thể gột rửa'},
  {名称:'Trang điểm má ửng phát tình',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:5,类型倾向:['Quan hệ tình dục'],加速:2,风险:2,越级钥匙:!1,价格:700,简介:'Nét ửng hồng do trang điểm? Hay là loại rạo rực không thể nào che giấu'},
  {名称:'Khuyên rốn',分类:'Cải tạo cơ thể',阶段门槛:4,类型倾向:['Tương tác mờ ám'],加速:.5,风险:0,越级钥匙:!1,价格:400,堕落度加成:4,简介:'Chiếc khuyên đầu tiên, nét nổi loạn nho nhỏ giấu kín dưới lớp áo',首穿:'Nàng nằm trên ghế tiệm xỏ khuyên, mũi kim đâm qua mép rốn buốt nhói khiến nàng siết chặt nắm tay - trên đường về nhà, nàng không ngừng chạm vào chiếc khuyên nhỏ qua làn áo'},
  {名称:'Khuyên lưỡi',分类:'Cải tạo cơ thể',阶段门槛:4,类型倾向:['Quan hệ tình dục'],加速:.5,风险:0,越级钥匙:!1,价格:500,堕落度加成:4,简介:'Nói chuyện không nhìn thấy, công dụng chỉ hai người thấu hiểu',首穿:'Đầu lưỡi có thêm một viên bi kim loại, khi nói chuyện nàng vô thức đẩy vào vòm họng - nàng hiểu rất rõ thứ này dùng để làm gì'},
  {名称:'Khuyên núm vú',分类:'Cải tạo cơ thể',阶段门槛:4,类型倾向:['Cởi mở cơ thể'],加速:.5,风险:0,越级钥匙:!1,价格:600,堕落度加成:4,简介:'Mỗi lần vải vóc cọ xát đều là một lời nhắc nhở nhức nhối',首穿:'Sau khi cơn đau nhói hai bên qua đi, là cảm giác mẫn cảm dai dẳng - lúc thay quần áo nàng đứng trước gương ngắm nhìn hai đốm sáng bạc ấy thật lâu'},
  {名称:'Hình xăm bướm sau eo',分类:'Cải tạo cơ thể',阶段门槛:4,类型倾向:['Tương tác mờ ám'],加速:.5,风险:0,越级钥匙:!1,价格:550,堕落度加成:4,简介:'Cúi người thoáng ẩn hiện một cánh bướm dập dờn',首穿:'Mũi kim của thợ xăm di chuyển nơi thắt lưng suốt hai giờ liền. Về đến nhà, nàng xoay lưng vén vạt áo - cánh bướm ấy đang đậu ngay vị trí mờ ám nhất'},
  {名称:'Dâm văn bụng dưới',分类:'Cải tạo cơ thể',阶段门槛:4,类型倾向:['Quan hệ tình dục'],加速:.5,风险:0,越级钥匙:!1,价格:700,堕落度加成:5,简介:'Họa tiết trên bụng dưới mang ý nghĩa gì, người hiểu nhìn qua là biết ngay',首穿:'Nàng yêu cầu thợ xăm vẽ đúng hoa văn ấy lên bụng dưới - mũi kim lướt đến đâu mặt nàng đỏ bừng như thiêu đốt, vì nàng biết rõ dấu vết này đại diện cho điều gì'},
  {名称:'Khuyên âm vật',分类:'Cải tạo cơ thể',阶段门槛:5,类型倾向:['Quan hệ tình dục'],加速:.5,风险:0,越级钥匙:!1,价格:800,堕落度加成:5,简介:'Trang sức vĩnh viễn nơi thầm kín nhất, mỗi bước chân đều là tra tấn cùng khoái lạc đan xen',首穿:'Đây là quyết định vượt rào táo bạo nhất đời nàng. Mấy ngày vết thương lành, nàng đi lại đều rụt rè cẩn trọng - từ đây mỗi bước chuyển động nhẹ đều nhắc nhở nàng đã biến thành thứ gì'},
  {名称:'Phẫu thuật nâng ngực',分类:'Cải tạo cơ thể',阶段门槛:5,类型倾向:['Cởi mở cơ thể'],加速:.5,风险:0,越级钥匙:!1,价格:1200,堕落度加成:6,简介:'Dưới danh nghĩa "để trở nên đẹp hơn", cơ thể từ đây phục vụ trọn vẹn cho dục vọng',首穿:'Ngày cắt chỉ nàng đứng trước gương, độ cong đẫy đà trước ngực vừa xa lạ vừa căng tròn - quần áo cũ đều đã chật ních, tim nàng đập thình thịch thầm nghĩ: Anh ấy nhất định sẽ nhận ra'},
  {名称:'Đôi lỗ tai đầu tiên',分类:'Cải tạo cơ thể',阶段门槛:2,类型倾向:['Ỷ lại tình cảm'],加速:.5,风险:0,越级钥匙:!1,价格:200,堕落度加成:2,简介:'Anh ấy dắt đi bấm - đau một thoáng, nhớ một đời',首穿:'Lúc bấm khuyên tai, nàng vô thức nắm chặt lấy tay {{user}}. Trên đường về nàng không ngừng chạm vào chiếc đinh bạc nhỏ trên dái tai - đây là chuyện "vượt rào" đầu tiên anh cùng nàng thực hiện'},
  {名称:'Hình xăm vệt sao cổ tay trong',分类:'Cải tạo cơ thể',阶段门槛:3,类型倾向:['Tiếp xúc thân mật'],加速:.5,风险:0,越级钥匙:!1,价格:350,堕落度加成:3,简介:'Ngôi sao nhỏ như hạt gạo, chỉ khi lật cổ tay mới nhìn thấy',首穿:'Khi mũi kim di chuyển bên trong cổ tay, nàng luôn nhìn {{user}}. Hình xăm là một ngôi sao nhỏ biến hóa từ một ngày kỷ niệm - từ nay mỗi lần nhấc tay xem giờ, nàng đều nhớ về ngày hôm ấy'},
  {名称:'Hình xăm chữ cái họ sau tai',分类:'Cải tạo cơ thể',阶段门槛:4,类型倾向:['Nhận thức thân phận'],加速:.5,风险:0,越级钥匙:!1,价格:550,堕落度加成:4,简介:'Chữ cái một centimet sau tai - nàng âm thầm đổi họ, chỉ có anh biết',首穿:'Thợ xăm hỏi chữ cái này có ý nghĩa gì, nàng chỉ cười mà không đáp. Từ đó sau tai nàng giấu một họ khác - ngón tay lướt qua khi vén tóc, trái tim khẽ lắng lại an yên'},
  {名称:'Hình xăm vết nhẫn ngón áp út',分类:'Cải tạo cơ thể',阶段门槛:5,类型倾向:['Thay thế gia đình'],加速:.5,风险:0,越级钥匙:!1,价格:800,堕落度加成:5,简介:'Nhẫn có thể tháo, nhưng nét xăm thì vĩnh viễn không thể gỡ',首穿:'Nàng tháo nhẫn cưới ra, để mũi kim xăm một vòng chỉ mảnh theo ngấn nhẫn. Khi lành lặn, vòng chỉ ấy rõ ràng hơn bất cứ chiếc nhẫn nào - ngón tay này đã có một chủ nhân mới'},
  {名称:'Dép bông mềm đi trong nhà',分类:'Trang bị',槽位:'Giày',阶段门槛:1,类型倾向:['Đồng hành trò chuyện','Ỷ lại tình cảm'],加速:.5,风险:0,越级钥匙:!1,价格:80,简介:'Đôi dép mềm không thể bình thường hơn - chính việc "anh ấy chọn" mới là thứ phát huy tác dụng'},
  {名称:'Dép quai mảnh đính quả bông',分类:'Trang bị',槽位:'Giày',阶段门槛:2,类型倾向:['Đụng chạm thân thể'],加速:1,风险:1,越级钥匙:!1,价格:180,简介:'Quai mảnh lộ mu bàn chân, từng bước giẫm trong nhà mang chút thanh thoát bất thường'},
  {名称:'Giày gót nhọn đế đỏ',分类:'Trang bị',槽位:'Giày',阶段门槛:3,类型倾向:['Tương tác mờ ám','Cởi mở cơ thể'],加速:1,风险:2,越级钥匙:!1,价格:350,简介:'Ở nhà đi giày cao gót chẳng có lý do thực tế nào - đó chính là hàm ý của nó'},
  {名称:'Giày cao gót dây khóa buộc cổ chân',分类:'Trang bị',槽位:'Giày',阶段门槛:4,类型倾向:['Quan hệ tình dục','Phục tùng tuyệt đối'],加速:1.5,风险:3,越级钥匙:!1,价格:600,简介:'Dây mảnh quanh mắt cá chân kết thành hình chiếc khóa, muốn cởi ra phải được cho phép'},
  {名称:'Đồ lót thiếu nữ do anh chọn',分类:'Trang bị',槽位:'Nội y',阶段门槛:2,类型倾向:['Ỷ lại tình cảm'],加速:.5,风险:0,越级钥匙:!1,价格:130,简介:'Không hề khêu gợi, thậm chí mang chút hơi thở thiếu nữ - nhưng thứ mặc sát người mỗi ngày là do anh chọn'},
  {名称:'Đồ lót khóa cài hình trái tim',分类:'Trang bị',槽位:'Nội y',阶段门槛:3,类型倾向:['Tiếp xúc thân mật'],加速:1,风险:1,越级钥匙:!1,价格:300,简介:'Khóa cài phía trước là một ổ khóa tim nhỏ - chìa khóa làm thành mặt dây chuyền, nằm trong tay anh'},
  {名称:'Quần lót đôi đồng bộ',分类:'Trang bị',槽位:'Nội y',阶段门槛:4,类型倾向:['Tiếp xúc thân mật','Đụng chạm thân thể'],加速:1.5,风险:1,越级钥匙:!1,价格:460,简介:'Chiếc còn lại trong cặp nằm trong ngăn kéo của anh'},
  {名称:'Trang điểm tỉ mỉ cấp hẹn hò',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:4,类型倾向:['Tiếp xúc thân mật','Ỷ lại tình cảm'],加速:1.5,风险:1,越级钥匙:!1,价格:430,简介:'Ở nhà cũng trang điểm suốt bốn mươi phút - như thể mỗi ngày đều đang bước vào một buổi hẹn hò'},
  {名称:'Giày trắng dạo phố bên nhau',分类:'Trang bị',槽位:'Giày',阶段门槛:3,类型倾向:['Đụng chạm thân thể'],加速:1,风险:0,越级钥匙:!1,价格:240,简介:'Anh nói sau bữa cơm muốn cùng nàng đi dạo, hôm sau nàng liền mua một đôi giày êm chân'},
  {名称:'Đồng hồ đôi khắc ngày sinh',分类:'Trang bị',槽位:'Trang sức',阶段门槛:5,类型倾向:['Ỷ lại tình cảm'],加速:2,风险:1,越级钥匙:!0,价格:700,简介:'Mặt sau đồng hồ khắc ngày sinh của hai người - ghép thời gian lại thành một cặp'},
  {名称:'Váy tạp dề vàng nhạt',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:2,类型倾向:['Nhận thức thân phận'],加速:.5,风险:0,越级钥匙:!1,价格:160,简介:'Cột tạp dề đứng vào bếp, như một nữ chủ nhân danh chính ngôn thuận của ngôi nhà này'},
  {名称:'Đồ lót thêu họ người yêu',分类:'Trang bị',槽位:'Nội y',阶段门槛:3,类型倾向:['Nhận thức thân phận'],加速:1,风险:1,越级钥匙:!1,价格:330,简介:'Góc áo thêu tắt một chữ cái họ nhỏ nhắn - không phải họ nhà chồng nàng'},
  {名称:'Ren trắng phong cách tân hôn',分类:'Trang bị',槽位:'Nội y',阶段门槛:4,类型倾向:['Thay thế gia đình'],加速:1.5,风险:2,越级钥匙:!0,价格:540,简介:'Nội y chất liệu voan trắng - như thể tự gả mình đi thêm một lần nữa'},
  {名称:'Vòng ngọc gia truyền',分类:'Trang bị',槽位:'Trang sức',阶段门槛:3,类型倾向:['Nhận thức thân phận'],加速:1,风险:1,越级钥匙:!1,价格:320,简介:'Anh trịnh trọng đeo cho nàng - cách đeo ấy, như trao truyền thứ gì đó cho nữ chủ nhân của mái ấm này'},
  {名称:'Mặt dây chuyền khắc họ',分类:'Trang bị',槽位:'Trang sức',阶段门槛:4,类型倾向:['Thay thế gia đình','Nhận thức thân phận'],加速:1.5,风险:2,越级钥匙:!0,价格:520,简介:'Bên trong mặt dây chuyền khắc họ của anh - áp sát lồng ngực, cho ai xem không còn quan trọng'},
  {名称:'Trang điểm nhẹ quán xuyến việc nhà',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:2,类型倾向:['Nhận thức thân phận'],加速:.5,风险:0,越级钥匙:!1,价格:140,简介:'Trang nhã đoan chính, là lớp phấn son nghiêm túc chăm chút cho bản thân vì một mái ấm'},
  {名称:'Trang điểm đỏ chính thất',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:5,类型倾向:['Thay thế gia đình'],加速:2,风险:1,越级钥匙:!1,价格:720,简介:'Lớp trang điểm đỏ đoan trang cấp tiệc cưới - màu sắc này, chỉ chính thất mới xứng đáng dùng'},
  {名称:'Dép nhung nữ chủ nhân',分类:'Trang bị',槽位:'Giày',阶段门槛:2,类型倾向:['Nhận thức thân phận'],加速:.5,风险:0,越级钥匙:!1,价格:120,简介:'Thay đi đôi dép cũ đã mang bao năm sau khi cưới - đôi mới này là "đôi giày của nữ chủ nhân"'},
  {名称:'Giày Mary Jane quai mảnh',分类:'Trang bị',槽位:'Giày',阶段门槛:4,类型倾向:['Thay thế gia đình'],加速:1.5,风险:1,越级钥匙:!1,价格:480,简介:'Đôi giày mũi tròn quai mảnh đoan trang - như thể mỗi đêm đều đang bước vào bữa tiệc gia đình của anh'},
  {名称:'Giày đế khủng chống nước',分类:'Trang bị',槽位:'Giày',阶段门槛:5,类型倾向:['Cởi mở cơ thể'],加速:2,风险:3,越级钥匙:!1,价格:750,简介:'Ở nhà mang loại giày này, vốn không phải để đi lại'},
  {名称:'Trang phục hầu gái cổ điển',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:3,类型倾向:['Phục tùng tuyệt đối'],加速:1,风险:1,越级钥匙:!1,价格:350,简介:'Khoảnh khắc thắt nơ con bướm trên tạp dề, thân phận trong nhà đã hoàn toàn thay đổi'},
  {名称:'Váy thắt eo buộc dây',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:4,类型倾向:['Phục tùng tuyệt đối','Quan hệ tình dục'],加速:1.5,风险:2,越级钥匙:!0,价格:500,简介:'Dây buộc sau eo phải nhờ người khác siết chặt - khoác nó lên là không thể rời xa người'},
  {名称:'Váy dài cổ đứng bó buộc',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:5,类型倾向:['Phục tùng tuyệt đối'],加速:2,风险:2,越级钥匙:!1,价格:780,简介:'Nút bấm cuối cùng nơi cổ áo được thiết kế ở vị trí tự mình không thể chạm tới'},
  {名称:'Nốt ruồi duyên mị hoặc',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:3,类型倾向:['Quan hệ tình dục'],加速:1,风险:1,越级钥匙:!1,价格:280,简介:'Một chấm nhỏ dưới mi mắt - ý đồ khi điểm nét này lên, nàng sẽ dần thấu hiểu'},
  {名称:'Giày đế dày vòng xích cổ chân',分类:'Trang bị',槽位:'Giày',阶段门槛:5,类型倾向:['Phục tùng tuyệt đối'],加速:2,风险:3,越级钥匙:!1,价格:800,简介:'Trên vòng cổ chân buông một đoạn xích ngắn, ý nghĩa chẳng cần nói cũng rõ'},
  {名称:'Bông tai đá sinh nhật của anh',分类:'Trang bị',槽位:'Trang sức',阶段门槛:3,类型倾向:['Ỷ lại tình cảm'],加速:1,风险:0,越级钥匙:!1,价格:260,简介:'Một điểm đá sinh nhật của anh trên dái tai - đồng nghĩa với việc luôn mang anh bên mình'},
  {名称:'Áo choàng tắm đôi',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:4,类型倾向:['Đụng chạm thân thể','Đồng hành trò chuyện'],加速:1.5,风险:1,越级钥匙:!1,价格:440,简介:'Tạo thành một cặp với chiếc trong tủ của anh - trong nhà sau khi tắm xong, ngỡ như đang ở chốn khách sạn'},
  {名称:'Váy ngủ lụa tơ tằm kỷ niệm',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:5,类型倾向:['Tiếp xúc thân mật'],加速:2,风险:1,越级钥匙:!1,价格:680,简介:'Không mỏng cũng chẳng hở - nhưng chất lụa mịn màng ấy chỉ tồn tại vì một người'},
  {名称:'Hương nước hoa độc quyền',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:5,类型倾向:['Ỷ lại tình cảm'],加速:2,风险:1,越级钥匙:!1,价格:700,简介:'Chuyên gia pha chế theo miêu tả của anh - thế gian này chỉ có một chai duy nhất, công thức nằm trọn trong tay anh'},
  {名称:'Trâm ngọc búi tóc',分类:'Trang bị',槽位:'Trang điểm',阶段门槛:3,类型倾向:['Nhận thức thân phận'],加速:1,风险:0,越级钥匙:!1,价格:300,简介:'Người phụ nữ búi tóc lên là chuẩn bị làm chủ gia đình - chiếc trâm này là do anh tặng'},
  {名称:'Yếm lụa tơ tằm đêm tân hôn',分类:'Trang bị',槽位:'Nội y',阶段门槛:5,类型倾向:['Thay thế gia đình'],加速:2,风险:2,越级钥匙:!1,价格:760,简介:'Lại một lần nữa khoác lên thứ chỉ tân nương mới mặc - lần này, nàng biết là vì ai'},
  {名称:'Xích cơ thể hai tầng',分类:'Trang bị',槽位:'Trang sức',阶段门槛:4,类型倾向:['Cởi mở cơ thể'],加速:1.5,风险:2,越级钥匙:!1,价格:520,简介:'Sợi xích mảnh quấn quanh thân thể, trượt nhẹ dưới làn vải theo từng cử động'},
  {名称:'Áo choàng dài mặc nhà voan mỏng',分类:'Trang bị',槽位:'Trang phục ngoài',阶段门槛:5,类型倾向:['Cởi mở cơ thể'],加速:2,风险:3,越级钥匙:!1,价格:760,简介:'Như đã mặc tất cả, lại như chẳng mặc gì'},
  {名称:'Bộ ren xuyên thấu hoàn toàn',分类:'Trang bị',槽位:'Nội y',阶段门槛:5,类型倾向:['Cởi mở cơ thể'],加速:2,风险:3,越级钥匙:!1,价格:780,简介:'Họa tiết hoa văn ren là lớp che chắn duy nhất'},
  {名称:'Vòng siết đùi',分类:'Trang bị',槽位:'Trang sức',阶段门槛:4,类型倾向:['Quan hệ tình dục'],加速:1.5,风险:2,越级钥匙:!1,价格:460,简介:'Dưới tà váy nơi ánh mắt không chạm tới, thắt chặt một vòng da nhắc nhở'},
  {名称:'Hạt ngọc điều khiển từ xa sát thân',分类:'Trang bị',槽位:'Trang sức',阶段门槛:4,类型倾向:['Quan hệ tình dục','Phục tùng tuyệt đối'],加速:1.5,风险:3,越级钥匙:!0,价格:580,简介:'Vật nhỏ giấu sát vào nơi thầm kín - điều khiển từ xa không nằm trong tay nàng'},
  {名称:'Nút chặn trang sức đuôi lông',分类:'Trang bị',槽位:'Trang sức',阶段门槛:5,类型倾向:['Phục tùng tuyệt đối'],加速:2,风险:3,越级钥匙:!1,价格:820,简介:'Váy dài mặc nhà che được nó, nhưng không che được ý nghĩa của nó'},
  {名称:'Tin nhắn viện cớ',分类:'Tiêu hao phẩm',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:80,冷却楼数:18,简介:'Một tin nhắn giải thích kịp thời, đóng băng nghi ngờ của Tô Văn với nàng trong 10 tầng (hồi chiêu 18 tầng, đóng băng xong có 8 tầng giai đoạn không bảo hộ)'},
  {名称:'Thuốc an thần',分类:'Tiêu hao phẩm',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:200,冷却楼数:5,简介:'Tối nay nàng đặc biệt thư giãn - giai đoạn hiệu lực +1 trong vòng 5 tầng (có hiệu lực sau khi van vượt cấp hồi phục)'},
  {名称:'Rượu kháng sinh',分类:'Tiêu hao phẩm',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:350,冷却楼数:5,简介:'Ngưỡng cửa ý thức đã bị làm mềm - giai đoạn hiệu lực +2 trong vòng 3 tầng (có hiệu lực sau khi van vượt cấp hồi phục)'},
  {名称:'Bữa tiệc gia đình thịnh soạn',分类:'Tiêu hao phẩm',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:150,冷却楼数:6,简介:'Nàng chuẩn bị một bàn đồ ăn ngon cho Tô Văn - nghi ngờ -10 (không giảm dưới mức giới hạn dưới do độ sa đọa tạo thành)'},
  {名称:'Món quà nhỏ chu đáo',分类:'Tiêu hao phẩm',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:250,冷却楼数:8,简介:'Một món quà chu tất âm thầm gửi đến tay Tô Văn - nghi ngờ -15 (nhắc nhẹ một câu trong văn)'},
  {名称:'Cuối tuần cả nhà đi chơi',分类:'Tiêu hao phẩm',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:400,冷却楼数:20,简介:'Một chuyến dã ngoại ấm áp bên gia đình - nghi ngờ -25 và đóng băng trong 5 tầng (hồi chiêu 20 tầng)'},
  {名称:'Đồng hồ ngưng đọng',分类:'Đặc quyền',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:1e3,简介:'Sau khi mua sẽ đưa vào túi đồ; khi kích hoạt sẽ vĩnh viễn đóng băng trạng thái, vị trí, con trỏ sinh hoạt của Tô Văn lúc đó cùng hai chỉ số nghi ngờ với Tần Lộ/Tô Mộng, không thể thu hồi'},
  {名称:'Mở rộng cấy ghép',分类:'Đặc quyền',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:800,简介:'Ô bồi dưỡng của mỗi nhân vật 3 -> 4'},
  {名称:'Cấy ghép chuẩn xác',分类:'Đặc quyền',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:600,简介:'Giới hạn số từ ý niệm 10 -> 20, công cụ tất yếu để lập trình hành vi giai đoạn sau'},
  {名称:'Cấy ghép tức thì',分类:'Đặc quyền',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:1500,简介:'Cấy trực tiếp miễn phán định (lên kệ kỳ 2)',未上架:!0},
  {名称:'Lư hương khắc ấn',分类:'Đặc quyền',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:500,简介:'Nhận 1 hạn ngạch khắc ấn: Khắc một thói quen vào sâu trong bản năng của nàng - không tốn ô thói quen, tăng cường trọng số biểu hiện, không thể đảo ngược (có thể mua tích lũy, mỗi nhân vật tối đa khắc 4 điều)'},
  {名称:'Máy ảnh siêu nhỏ gắn gimbal',分类:'Đặc biệt',阶段门槛:1,类型倾向:[],加速:0,风险:0,越级钥匙:!1,价格:600,简介:'Mua đứt một lần. Bắt đầu/dừng ghi hình, sau khi dừng AI sẽ lưu trữ thước phim; thước phim có thể cho bất kỳ nhân vật nữ nào xem - nàng nhìn khung cảnh trong màn hình, nhận thức bị tái cấu trúc (độ sa đọa +4)'}
].map(e=>[e.名称,e])),

S={
  'Đồ lót ren':'Dâm đãng','Đồ lót khiêu dâm xẻ tà':'Nô lệ tình dục','Miếng dán ngực tàng hình':'Dâm đãng','Quần lọt khe không đường may':'Dâm đãng','Bikini khiêu dâm ba điểm':'Nô lệ tình dục','Quần tất xẻ đáy':'Nô lệ tình dục','Đồ định hình liền thân':'Dâm đãng','Đai đeo tất đen quyến rũ':'Dâm đãng','Quần lót chuỗi ngọc trai':'Nô lệ tình dục','Lưới liền thân khoét rỗng':'Nô lệ tình dục','Đồ lót thiếu nữ do anh chọn':'Người tình','Đồ lót khóa cài hình trái tim':'Người tình','Quần lót đôi đồng bộ':'Người tình','Đồ lót thêu họ người yêu':'Vợ yêu','Ren trắng phong cách tân hôn':'Vợ yêu','Váy liền thân ôm dáng':'Người tình','Áo len cổ trễ':'Dâm đãng','Váy ngủ xuyên thấu':'Dâm đãng','Bộ đồ yoga bó sát':'Người tình','Áo lửng hở eo':'Dâm đãng','Tạp dề trần trụi':'Vợ yêu','Đồ mặc nhà đôi':'Người tình','Quần short ôm mông':'Dâm đãng','Sườn xám xẻ tà cao':'Vợ yêu','Áo sơ mi trắng của anh':'Vợ yêu','Váy lụa đỏ rượu vang':'Người tình','Váy cổ cao cài nút kín':'Vợ yêu','Váy tạp dề vàng nhạt':'Vợ yêu','Trang phục hầu gái cổ điển':'Nô lệ tình dục','Váy thắt eo buộc dây':'Nô lệ tình dục','Váy dài cổ đứng bó buộc':'Nô lệ tình dục','Vòng tay chỉ đỏ':'Người tình','Vòng choker ôm sát cổ':'Nô lệ tình dục','Nhẫn trơn đơn giản':'Vợ yêu','Dây chuyền đôi':'Người tình','Xích đeo rốn':'Dâm đãng','Bông tai ngọc trai':'Người tình','Lắc chân thanh mảnh':'Dâm đãng','Dây chuyền xương quai xanh hoa hồng':'Dâm đãng','Lắc chân lục lạc':'Nô lệ tình dục','Vòng cổ da':'Nô lệ tình dục','Vòng ngọc gia truyền':'Vợ yêu','Mặt dây chuyền khắc họ':'Vợ yêu','Đồng hồ đôi khắc ngày sinh':'Người tình','Nước hoa sương mờ':'Người tình','Son đỏ thuần':'Dâm đãng','Trang điểm dạ tiệc ma mị':'Dâm đãng','Móng tay đỏ tươi':'Dâm đãng','Nước hoa kích dục':'Nô lệ tình dục','Son bóng mọng nước':'Người tình','Trang điểm mắt hoa đào':'Người tình','Sữa tắm đồng hương':'Nô lệ tình dục','Trang điểm má ửng phát tình':'Dâm đãng','Trang điểm nhẹ quán xuyến việc nhà':'Vợ yêu','Trang điểm đỏ chính thất':'Vợ yêu','Nốt ruồi duyên mị hoặc':'Nô lệ tình dục','Trang điểm tỉ mỉ cấp hẹn hò':'Người tình','Dép bông mềm đi trong nhà':'Người tình','Dép quai mảnh đính quả bông':'Người tình','Giày gót nhọn đế đỏ':'Dâm đãng','Giày cao gót dây khóa buộc cổ chân':'Nô lệ tình dục','Giày trắng dạo phố bên nhau':'Người tình','Dép nhung nữ chủ nhân':'Vợ yêu','Giày Mary Jane quai mảnh':'Vợ yêu','Giày đế khủng chống nước':'Dâm đãng','Giày đế dày vòng xích cổ chân':'Nô lệ tình dục','Bông tai đá sinh nhật của anh':'Người tình','Áo choàng tắm đôi':'Người tình','Váy ngủ lụa tơ tằm kỷ niệm':'Người tình','Hương nước hoa độc quyền':'Người tình','Trâm ngọc búi tóc':'Vợ yêu','Yếm lụa tơ tằm đêm tân hôn':'Vợ yêu','Xích cơ thể hai tầng':'Dâm đãng','Áo choàng dài mặc nhà voan mỏng':'Dâm đãng','Bộ ren xuyên thấu hoàn toàn':'Dâm đãng','Vòng siết đùi':'Nô lệ tình dục','Hạt ngọc điều khiển từ xa sát thân':'Nô lệ tình dục','Nút chặn trang sức đuôi lông':'Nô lệ tình dục','Khuyên rốn':'Dâm đãng','Khuyên lưỡi':'Nô lệ tình dục','Khuyên núm vú':'Dâm đãng','Hình xăm bướm sau eo':'Dâm đãng','Dâm văn bụng dưới':'Nô lệ tình dục','Khuyên âm vật':'Nô lệ tình dục','Phẫu thuật nâng ngực':'Dâm đãng','Đôi lỗ tai đầu tiên':'Người tình','Hình xăm vệt sao cổ tay trong':'Người tình','Hình xăm chữ cái họ sau tai':'Vợ yêu','Hình xăm vết nhẫn ngón áp út':'Vợ yêu'
};

function T(e,t,n){let o=0;for(const[r,s]of Object.entries(e[t]['Trạng thái trang bị'])){const e=D[r];if(!e)continue;('Đang trang bị'===s||'Cải tạo cơ thể'===e.分类&&'Đã mua'===s)&&(e.类型倾向.includes(n)&&(o+=e.加速))}return o}
function w(e,t){return Object.entries(e[t]['Trạng thái trang bị']).filter(([,e])=>'Đang trang bị'===e).map(([e])=>e)}
function x(e,t){return Object.keys(e[t]['Trạng thái trang bị']).filter(e=>'Cải tạo cơ thể'===D[e]?.分类)}
function C(e,t){return w(e,t).filter(e=>(D[e]?.风险??0)>=1)}
function R(e,t){return w(e,t).reduce((e,t)=>e+(D[t]?.风险??0),0)}

const P=['Nội y','Trang phục ngoài','Trang sức','Trang điểm','Giày','Cải tạo cơ thể'];

function V(e,t){
  if(e['Hệ thống']['_Thử nghiệm max sao'])return{lit:P.map(()=>!0),count:P.length,full:!0,route:null};
  const n=w(e,t),o=new Set(n.map(e=>S[e]).filter(Boolean));
  if(1!==o.size)return{lit:P.map(()=>!1),count:0,full:!1,route:null};
  const r=[...o][0],s=P.map(o=>'Cải tạo cơ thể'===o?Object.keys(e[t]['Trạng thái trang bị']).some(e=>'Cải tạo cơ thể'===D[e]?.分类&&S[e]===r):n.some(e=>D[e]?.槽位===o)),c=s.filter(Boolean).length;
  return{lit:s,count:c,full:c===P.length,route:r}
}

const N='Tần Lộ Bản làm lại_Gương tiến giai';
const B={
  'Người tình':{
    图标:'💗',
    培育类型:['Đồng hành trò chuyện','Ỷ lại tình cảm','Đụng chạm thân thể','Tiếp xúc thân mật'],
    培育加成:2,
    疑心每楼:1,
    效果简述:'Bồi dưỡng luyến ái +2/tầng · Nghi ngờ +1/tầng',
    呈现:'Hôm nay từ đầu đến chân nàng đều ăn vận vì {{user}} - người phụ nữ đang yêu không thể giấu nổi lòng mình, từng chi tiết nhỏ đều chờ đợi anh nhận ra'
  },
  'Vợ yêu':{
    图标:'💍',
    培育类型:['Nhận thức thân phận','Thay thế gia đình'],
    培育加成:2,
    疑心每楼:0,
    效果简述:'Bồi dưỡng vị trí người vợ +2/tầng · Nghi ngờ +0/tầng',
    呈现:'Hôm nay từ trong ra ngoài nàng đều mang trang phục của "nữ chủ nhân ngôi nhà này" - trong mắt người ngoài là sự đoan trang hiền thục không tì vết, chỉ riêng nàng biết vẻ đoan trang này là vì ai mà khoác lên'
  },
  'Dâm đãng':{
    图标:'🔥',
    培育类型:['Tương tác mờ ám','Cởi mở cơ thể'],
    培育加成:2,
    疑心每楼:2,
    效果简述:'Bồi dưỡng cởi mở +2/tầng · Nghi ngờ +2/tầng',
    呈现:'Hôm nay từ trong ra ngoài nàng đều lộ rõ vẻ hở hang và khiêu khích không thể che giấu - từng tấc da thịt trên cơ thể đều tiết lộ nàng đang biến thành người phụ nữ như thế nào'
  },
  'Nô lệ tình dục':{
    图标:'⛓️',
    培育类型:['Quan hệ tình dục','Phục tùng tuyệt đối'],
    培育加成:2,
    疑心每楼:2,
    效果简述:'Bồi dưỡng phục tùng +2/tầng · Nghi ngờ +2/tầng',
    呈现:'Hôm nay từ trong ra ngoài mỗi món nàng khoác lên đều mang ý nghĩa "bị sở hữu" - nàng hiểu rõ công dụng của từng món, việc mặc chỉnh tề bản thân nó đã là sự phục tùng thầm lặng'
  }
};

function G(e,t){return Math.floor(.25*e[t]['Độ sa đọa'])}
const H='Đồng hồ ngưng đọng';

function L(e){return!0===e['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số']['Có hiệu lực không']}
function U(e){
  const t=e['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số'];
  return!!t['Có hiệu lực không']&&(
    t['Đóng băng con trỏ sinh hoạt']<0&&(t['Đóng băng con trỏ sinh hoạt']=e['Hệ thống']['_Con trỏ sinh hoạt Tô Văn']),
    e['Trạng thái Tô Văn']['Trạng thái hiện tại']=t['Trạng thái đóng băng'],
    e['Trạng thái Tô Văn']['Vị trí hiện tại']=t['Đóng băng vị trí'],
    e['Trạng thái Tô Văn']['Nghi ngờ Tần Lộ']=t['Đóng băng nghi ngờ Tần Lộ'],
    e['Trạng thái Tô Văn']['Nghi ngờ Tô Mộng']=t['Đóng băng nghi ngờ Tô Mộng'],
    e['Hệ thống']['_Con trỏ sinh hoạt Tô Văn']=t['Đóng băng con trỏ sinh hoạt'],
    e['Hệ thống']['Trạng thái đạo cụ'][H]='Đang dùng',
    !0
  )
}

const Y=[{'Trạng thái':'Ở nhà','Vị trí':'Phòng ngủ chính','Số tầng':2},{'Trạng thái':'Ra ngoài','Vị trí':'Bên ngoài','Số tầng':7},{'Trạng thái':'Ở nhà','Vị trí':'Phòng ăn','Số tầng':2},{'Trạng thái':'Ở nhà','Vị trí':'Phòng khách','Số tầng':3},{'Trạng thái':'Ngủ say','Vị trí':'Phòng ngủ chính','Số tầng':2}],
F=[{'Trạng thái':'Ngủ say','Vị trí':'Phòng ngủ chính','Số tầng':2},{'Trạng thái':'Ở nhà','Vị trí':'Phòng ăn','Số tầng':2},{'Trạng thái':'Ở nhà','Vị trí':'Phòng khách','Số tầng':3},{'Trạng thái':'Ở nhà','Vị trí':'Nhà bếp','Số tầng':2},{'Trạng thái':'Ở nhà','Vị trí':'Phòng khách','Số tầng':3},{'Trạng thái':'Ngủ say','Vị trí':'Phòng ngủ chính','Số tầng':3}],
k=[Y,Y,[{'Trạng thái':'Ở nhà','Vị trí':'Phòng ngủ chính','Số tầng':2},{'Trạng thái':'Ra ngoài','Vị trí':'Bên ngoài','Số tầng':5},{'Trạng thái':'Ở nhà','Vị trí':'Phòng ăn','Số tầng':2},{'Trạng thái':'Ở nhà','Vị trí':'Phòng khách','Số tầng':3},{'Trạng thái':'Ở nhà','Vị trí':'Phòng khách','Số tầng':2},{'Trạng thái':'Ngủ say','Vị trí':'Phòng ngủ chính','Số tầng':2}],Y,[{'Trạng thái':'Ở nhà','Vị trí':'Phòng ngủ chính','Số tầng':2},{'Trạng thái':'Ở nhà','Vị trí':'Phòng ăn','Số tầng':2},{'Trạng thái':'Ở nhà','Vị trí':'Phòng khách','Số tầng':3},{'Trạng thái':'Ra ngoài','Vị trí':'Bên ngoài','Số tầng':5},{'Trạng thái':'Ở nhà','Vị trí':'Phòng ăn','Số tầng':2},{'Trạng thái':'Ngủ say','Vị trí':'Phòng ngủ chính','Số tầng':2}],F,F],
W=e=>e.reduce((e,t)=>e+t['Số tầng'],0),
q=k.reduce((e,t)=>e+W(t),0);

function J(e,t){return(e%t+t)%t}
function K(e){
  let t=J(e,q);
  for(let e=0;e<k.length;e++){
    const n=k[e],o=W(n);
    if(t<o){
      let o=t;
      for(let t=0;t<n.length;t++){
        const r=n[t];
        if(o<r['Số tầng'])return{dayIndex:e,segmentIndex:t,segmentFloorOffset:o};
        o-=r['Số tầng']
      }
    }
    t-=o
  }
  return{dayIndex:0,segmentIndex:0,segmentFloorOffset:0}
}

function Q(e){const{dayIndex:t,segmentIndex:n}=K(e),o=k[t][n];return{'Trạng thái':o['Trạng thái'],'Vị trí':o['Vị trí']}}
function X(e,t){return e['Trạng thái']===t['Trạng thái']&&e['Vị trí']===t['Vị trí']}
function Z(e,t,n){
  const o={'Trạng thái':t,'Vị trí':n};
  if(X(Q(e),o))return e;
  for(let t=1;t<=q;t++){
    const n=e-t;
    if(X(Q(n),o))return n;
    const r=e+t;
    if(X(Q(r),o))return r
  }
  return e
}

function ee(e){
  const t=e.trim();
  if(!t)return null;
  const n=t.match(/(?:睡到|等到|待到|跳到|快进到|推进到|来到|熬到|直到|时间(?:来)?到|转眼(?:来)?到(?:了)?|ngủ đến|chờ đến|nhảy đến|tua đến|chuyển đến|đến tận)\s*(?:了)?\s*(?:明天|第二天|第二日|次日|ngày mai|hôm sau|ngày hôm sau)(?:\s*(?:清晨|早上|早晨|上午|下午|傍晚|晚上|夜里|sáng sớm|buổi sáng|buổi trưa|buổi chiều|chập tối|buổi tối|đêm khuya))?/iu),
  o=t.match(/^(?:(?:时间来到|转眼到了?|到了?|thời gian đến|thoáng chốc đã đến|đến)\s*)?(?:第二天|第二日|次日|ngày mai|hôm sau|ngày hôm sau)(?:\s*(?:清晨|早上|早晨|上午|下午|傍晚|晚上|夜里|sáng sớm|buổi sáng|buổi trưa|buổi chiều|chập tối|buổi tối|đêm khuya))?(?=$|[,,.!?\s])/iu),
  r=/^(?:明天|ngày mai)(?:\s*(?:清晨|早上|早晨|上午|下午|傍晚|晚上|夜里|sáng sớm|buổi sáng|buổi trưa|buổi chiều|chập tối|buổi tối|đêm khuya))?[.!?]?$/iu.test(t)?t:'',
  s=n?.[0]??o?.[0]??r;
  return s?/(?:下午|傍晚|晚上|夜里|buổi chiều|chập tối|buổi tối|đêm)/iu.test(s)?'Đêm hôm sau':/(?:清晨|早上|早晨|上午|sáng sớm|buổi sáng)/iu.test(s)?'Sáng hôm sau':'Mở màn hôm sau':null
}

function te(e,t){
  const n=ee(e);
  if(!n)return null;
  const o=function(e){
    const t=e-J(e,q),{dayIndex:n}=K(e);
    let o=t;
    for(let e=0;e<=n;e++)o+=W(k[e]);
    return{cursor:o,dayIndex:(n+1)%k.length}
  }(t);
  return'Đêm hôm sau'===n?o.cursor+function(e){
    let t=0,n=0;
    for(const o of e)'Ở nhà'===o['Trạng thái']&&(n=t),t+=o['Số tầng'];
    return n
  }(k[o.dayIndex]):o.cursor
}

function ne(e,t,n){
  return n?`Người chơi xác định tua đến ${n}; chính văn trước tiên giải thích thời gian đã chuyển dời, sau đó diễn dịch theo Tô Văn ${t['Trạng thái']} @ ${t['Vị trí']}.`:'Ra ngoài'===e['Trạng thái']&&'Ra ngoài'!==t['Trạng thái']?`Tô Văn đang từ chỗ làm về nhà; chính văn bắt buộc phải viết cảnh tan ca, trên đường về và bước vào cửa trước, sau đó mới để anh đến ${t['Vị trí']}, tuyệt đối không được xuất hiện trực tiếp tại phòng ngủ chính mà không có chuyển cảnh hợp lý.`:e['Trạng thái']!==t['Trạng thái']||e['Vị trí']!==t['Vị trí']?`Tô Văn lượt này từ ${e['Trạng thái']} @ ${e['Vị trí']} di chuyển tự nhiên đến ${t['Trạng thái']} @ ${t['Vị trí']}, chính văn giữ chuyển cảnh hợp lý.`:''
}

function oe(e,t,n,o){
  const r=e['Hệ thống'],s={'Trạng thái':e['Trạng thái Tô Văn']['Trạng thái hiện tại'],'Vị trí':e['Trạng thái Tô Văn']['Vị trí hiện tại']};
  if(L(e)){
    const t=e['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số'];
    return{'Trạng thái':t['Trạng thái đóng băng'],'Vị trí':t['Đóng băng vị trí'],目标游标:t['Đóng băng con trỏ sinh hoạt']>=0?t['Đóng băng con trỏ sinh hoạt']:r['_Con trỏ sinh hoạt Tô Văn'],是否推进:!1,跳转类型:null,转场说明:`Đồng hồ ngưng đọng đã có hiệu lực vĩnh viễn: Tô Văn duy trì ${t['Trạng thái đóng băng']} @ ${t['Đóng băng vị trí']}, trạng thái, vị trí, lịch sinh hoạt và hai chỉ số nghi ngờ đều không được thay đổi.`}
  }
  if(r['_Dư chấn ngắt đến tầng']>=0&&t<=r['_Dư chấn ngắt đến tầng'])return{'Trạng thái':'Ở nhà','Vị trí':s['Vị trí'],目标游标:r['_Con trỏ sinh hoạt Tô Văn'],是否推进:!1,跳转类型:null,转场说明:''};
  if(o||t===r['_Tầng xử lý lần trước'])return{...s,目标游标:r['_Con trỏ sinh hoạt Tô Văn'],是否推进:!1,跳转类型:null,转场说明:''};
  const c=ee(n);
  let u,f=r['_Con trỏ sinh hoạt Tô Văn'];
  c?u=te(n,f)??f+1:(f=Z(f,s['Trạng thái'],s['Vị trí']),u=f+1);
  let l=Q(u);
  return c||'Ra ngoài'!==s['Trạng thái']||'Phòng ngủ chính'!==l['Vị trí']||(l={'Trạng thái':'Ở nhà','Vị trí':'Phòng khách'},u=Z(u,l['Trạng thái'],l['Vị trí'])),{...l,目标游标:u,是否推进:!0,跳转类型:c,转场说明:ne(s,l,c)}
}

function re(e,t,n,o=!1){return oe(e,t,n,o)}
function se(e){return'Phòng ăn'===e||'Phòng khách'===e||'Phòng ngủ chính'===e}

function ce(e,t,n){
  const o=e['Hệ thống'];
  if(U(e)){
    o['_Tầng xử lý lần trước']=t;
    const n=e['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số'];
    return void console.info(`[Lịch sinh hoạt Tô Văn] Ngưng đọng vĩnh viễn: ${n['Trạng thái đóng băng']} @ ${n['Đóng băng vị trí']}, con trỏ=${n['Đóng băng con trỏ sinh hoạt']}, hai chỉ số nghi ngờ giữ nguyên không đổi`)
  }
  const r=o['_Con trỏ sinh hoạt Tô Văn'],s=oe(e,t,n,!1);
  if(o['_Con trỏ sinh hoạt Tô Văn']=s.目标游标,s.是否推进&&(o['_Tầng xử lý lần trước']=t),e['Trạng thái Tô Văn']['Trạng thái hiện tại']=s['Trạng thái'],e['Trạng thái Tô Văn']['Vị trí hiện tại']=s['Vị trí'],s.是否推进&&!s.跳转类型){
    const e=s.目标游标-1;
    e!==r&&console.info(`[Lịch sinh hoạt Tô Văn] Con trỏ lưu cũ tự phục hồi: ${r} -> ${e}`)
  }else s.是否推进||t!==o['_Tầng xử lý lần trước']||console.info(`[Lịch sinh hoạt Tô Văn] Tầng ${t} đã xử lý, bỏ qua đẩy lặp lại`);
  console.info(`[Lịch sinh hoạt Tô Văn] Con trỏ=${o['_Con trỏ sinh hoạt Tô Văn']} -> Tô Văn ${s['Trạng thái']} @ ${s['Vị trí']}`+(se(s['Vị trí'])?' [Phòng tăng tốc]':'')+(s.跳转类型?` [${s.跳转类型}]`:''))
}

const ue={'Đồng hành trò chuyện':1,'Ỷ lại tình cảm':1,'Đụng chạm thân thể':2,'Tương tác mờ ám':2,'Tiếp xúc thân mật':3,'Cởi mở cơ thể':3,'Quan hệ tình dục':4,'Nhận thức thân phận':4,'Phục tùng tuyệt đối':5,'Thay thế gia đình':5},
fe={'Đơn giản':5,'Khó khăn':10},
le={'Đơn giản':3,'Khó khăn':4};

function ie(e){return e%10<=3}
function ae(e,t){return'Đang phán định'!==e['Trạng thái']&&'Đã trưởng thành'!==e['Trạng thái']&&'Đã hết hạn'!==e['Trạng thái']&&t-e['Tầng cấy ghép']>=30}
function _e(e,t){const n=ue[e]<=t?'Đơn giản':'Khó khăn';return{'Độ khó':n,'Số tầng cần':fe[n]}}

function de(e,t,n,o){
  const r=e[t];
  let s=0;
  return ie(n)&&(s+=1),r['_Vết nứt đến tầng']>=0&&n<=r['_Vết nứt đến tầng']&&(s+=1),r['_Thưởng vượt cấp']>0&&n<=r['_Thưởng vượt cấp đến tầng']&&(s+=r['_Thưởng vượt cấp']),o&&function(e,t,n){
    return Object.entries(e[t]['Trạng thái trang bị']).some(([e,t])=>{const o=D[e];return'Đang trang bị'===t&&!!o?.越级钥匙&&o.类型倾向.includes(n)})
  }(e,t,o)&&(s+=1),Math.min(r['Giai đoạn hiện tại']+Math.min(2,s),5)
}

function $e(e,t,n,o,r){
  const s=e[t]['Danh sách ý niệm'][n];
  if(!s)return void console.warn(`[Phán định ý niệm] Không tìm thấy ý niệm ${n}`);
  if('Chờ phán định'===o)return void console.info(`[Phán định ý niệm] ${n} vẫn chưa xác định loại, giữ trạng thái đang phán định`);
  const{'Độ khó':c,'Số tầng cần':u}=_e(o,e[t]['Giai đoạn hiện tại']);
  s['Loại']=o,s['Độ khó']=c,s['Số tầng cần']=u;
  const f=de(e,t,r,o),l=ue[o];
  if(l>f)return s['Trạng thái']='Chưa đạt chuẩn',void console.info(`[Phán định ý niệm] ${n} loại=${o} vượt cấp (cần giai đoạn ${l}, giai đoạn hiệu lực ${f}) -> Trả về chưa đạt chuẩn`);
  s['Trạng thái']='Đang bồi dưỡng',e[t]['_Ba lần cưỡng chế']>0&&(e[t]['_Ba lần cưỡng chế']=0,console.info(`[Ba lần cưỡng chế] ${t} cấy ghép bình thường thành công, bộ đếm liên tiếp được xóa về 0`)),console.info(`[Phán định ý niệm] ${n} loại=${o} độ khó=${c} cần ${u} tầng -> Đang bồi dưỡng`)
}

function ze(e,t,n,o){
  const r=e[t],s=r['Danh sách ý niệm'],c=se(e['Trạng thái Tô Văn']['Vị trí hiện tại']);
  for(const[u,f]of Object.entries(s)){
    if(f['_Cưỡng chế cấy ghép']&&'Đang bồi dưỡng'===f['Trạng thái']){
      f['Trạng thái']='Chưa đạt chuẩn',f['_Cưỡng chế cấy ghép']=!1,r['_Vết nứt đến tầng']=n+3,console.info(`[Ba lần cưỡng chế] ${t} ${u} cưỡng chế đào thải -> Trả về chưa đạt chuẩn (vết nứt phòng tuyến tâm lý đến tầng ${n+3})`);
      continue
    }
    if(ae(f,n)){
      f['Trạng thái']='Đã hết hạn',console.info(`[Ý niệm hết hạn] ${t} ${u} vượt quá 30 tầng chưa trưởng thành -> Đã hết hạn`);
      continue
    }
    if('Đang bồi dưỡng'!==f['Trạng thái'])continue;
    let s=1;
    c&&(s+=.5);
    const l=o[u];
    2===l?s+=2:1===l&&(s+=1);
    let i=0;
    'Chờ phán định'!==f['Loại']&&(i=T(e,t,f['Loại']),s+=i);
    const a=V(e,t);
    a.full&&(a.route?'Chờ phán định'!==f['Loại']&&B[a.route][培育类型].includes(f['Loại'])&&(s+=B[a.route][培育加成]):s+=1),f['Tiến độ khai phát']+=s,console.info(`[Bồi dưỡng ý niệm] ${t} ${u} +${s} (Tăng tốc: ${c?'Có':'Không'}, Liên quan: ${l??0}, Trang bị: ${i}) -> ${f['Tiến độ khai phát']}/${f['Số tầng cần']}`);
    const d=le[f['Độ khó']]??3;
    f['Tiến độ khai phát']>=f['Số tầng cần']&&n-f['Tầng cấy ghép']>=d&&he(e,t,u,n)
  }
}

function he(e,t,n,o){
  const r=e[t],s=r['Danh sách ý niệm'][n];
  if(s)return r['Danh sách thói quen'].length>=5?(s['Trạng thái']='Đã trưởng thành',void console.info(`[Ý niệm trưởng thành] ${t} ${n} đã chín muồi nhưng thói quen đã đủ 5, chờ bán bớt nhường chỗ`)):void function(e,t,n,o){
    const r=e[t],s=r['Danh sách ý niệm'][n];
    if(!s)return;
    r['Danh sách thói quen'].push({'Nội dung':s['Nội dung'],'Tầng hình thành':o});
    const c='Khó khăn'===s['Độ khó'];
    r['Độ sa đọa']+=c?8:6,r['Độ phụ thuộc nhân vật chính']+=c?4:3;
    const u=r['Độ phụ thuộc nhân vật chính'];
    let f=-2;
    u>=80?f=-5:u>=60?f=-4:u>=30&&(f=-3);
    c&&(f=Math.floor(1.2*f));
    r['Độ phụ thuộc Tô Văn']+=f;
    const l=I(r['Độ sa đọa']);
    l>r['Giai đoạn hiện tại']&&console.info(`[Ý niệm trưởng thành] ${t} độ sa đọa đã vượt qua ngưỡng giai đoạn ${l} (chờ người chơi tiến giai)`);
    delete r['Danh sách ý niệm'][n],console.info(`[Ý niệm chuyển thói quen] ${t} "${s['Nội dung']}" -> Thói quen (Độ sa đọa: ${r['Độ sa đọa']}, Phụ thuộc nhân vật chính: ${r['Độ phụ thuộc nhân vật chính']}, Phụ thuộc Tô Văn: ${r['Độ phụ thuộc Tô Văn']})`)
  }(e,t,n,o)
}

let me=!1,be=null;
const pe='[Ảnh chụp nhanh trạng thái trò chơi hiện tại';

function ge(){return SillyTavern.chat?.length??0}
function ve(){
  const e=SillyTavern.chat??[];
  for(let t=e.length-1;t>=0;t--)if(e[t].is_user)return e[t].mes??'';
  return''
}
function Ee(){const e=SillyTavern.chat??[],t=e[e.length-1];return!!t&&!t.is_user}

function Me(){
  const e=(SillyTavern.chat?.length??0)-1;
  for(let t=e;t>=0&&t>e-10;t--)try{
    const n=_.get(Mvu.getMvuData({type:'message',message_id:t}),'stat_data');
    if(n&&!_.isEmpty(n))return t!==e&&console.info(`[Tần Lộ Bản làm lại] stat_data tầng cuối chưa sẵn sàng, lùi lại lấy dữ liệu tầng ${t} (tầng cuối ${e})`),n
  }catch{}
}

function ye(e){
  be={
    'Trạng thái Tần Lộ':{
      'Độ sa đọa':e['Trạng thái Tần Lộ']['Độ sa đọa'],
      'Giai đoạn hiện tại':e['Trạng thái Tần Lộ']['Giai đoạn hiện tại'],
      'Độ phụ thuộc nhân vật chính':e['Trạng thái Tần Lộ']['Độ phụ thuộc nhân vật chính'],
      'Độ phụ thuộc Tô Văn':e['Trạng thái Tần Lộ']['Độ phụ thuộc Tô Văn'],
      'Danh sách ý niệm':{...e['Trạng thái Tần Lộ']['Danh sách ý niệm']},
      'Danh sách thói quen':[...e['Trạng thái Tần Lộ']['Danh sách thói quen']],
      'Danh sách tập tính khắc ấn':[...e['Trạng thái Tần Lộ']['Danh sách tập tính khắc ấn']]
    },
    'Trạng thái Tô Mộng':{
      'Độ sa đọa':e['Trạng thái Tô Mộng']['Độ sa đọa'],
      'Giai đoạn hiện tại':e['Trạng thái Tô Mộng']['Giai đoạn hiện tại'],
      'Độ phụ thuộc nhân vật chính':e['Trạng thái Tô Mộng']['Độ phụ thuộc nhân vật chính'],
      'Độ phụ thuộc Tô Văn':e['Trạng thái Tô Mộng']['Độ phụ thuộc Tô Văn'],
      'Danh sách ý niệm':{...e['Trạng thái Tô Mộng']['Danh sách ý niệm']},
      'Danh sách thói quen':[...e['Trạng thái Tô Mộng']['Danh sách thói quen']],
      'Danh sách tập tính khắc ấn':[...e['Trạng thái Tô Mộng']['Danh sách tập tính khắc ấn']]
    },
    'Trạng thái Tô Văn':{
      'Trạng thái hiện tại':e['Trạng thái Tô Văn']['Trạng thái hiện tại'],
      'Vị trí hiện tại':e['Trạng thái Tô Văn']['Vị trí hiện tại'],
      'Nghi ngờ Tần Lộ':e['Trạng thái Tô Văn']['Nghi ngờ Tần Lộ'],
      'Nghi ngờ Tô Mộng':e['Trạng thái Tô Văn']['Nghi ngờ Tô Mộng'],
      'Đóng băng vị trí chỉ số':{...e['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số']}
    },
    'Hệ thống':{
      'Tiền tệ':e['Hệ thống']['Tiền tệ'],
      'Trạng thái đạo cụ':{...e['Hệ thống']['Trạng thái đạo cụ']},
      '_Con trỏ sinh hoạt Tô Văn':e['Hệ thống']['_Con trỏ sinh hoạt Tô Văn'],
      'Nhân vật có mặt':{...e['Hệ thống']['Nhân vật có mặt']},
      '_Khóa có mặt':e['Hệ thống']['_Khóa có mặt'],
      '_Góc nhìn Tô Văn':{...e['Hệ thống']['_Góc nhìn Tô Văn']},
      '_Mốc ngắt quãng đã kích':{...e['Hệ thống']['_Mốc ngắt quãng đã kích']},
      '_Dư chấn ngắt đến tầng':e['Hệ thống']['_Dư chấn ngắt đến tầng'],
      '_Hồi chiêu ngắt đến tầng':e['Hệ thống']['_Hồi chiêu ngắt đến tầng']
    }
  },
  function(){
    if(!be?.['Hệ thống'])return;
    const e=be['Hệ thống'];
    try{
      const t=ge(),n=_.get(getVariables({type:'chat'}),N),o=be['Trạng thái Tần Lộ'],r=be['Trạng thái Tô Mộng'];
      n&&n['Tầng']<=t&&(
        o['Giai đoạn hiện tại']=Math.max(o['Giai đoạn hiện tại']??1,n['Tần Lộ']??1),
        r['Giai đoạn hiện tại']=Math.max(r['Giai đoạn hiện tại']??1,n['Tô Mộng']??1),
        o['Độ sa đọa']=Math.max(o['Độ sa đọa']??0,n['Tần Lộ sa đọa']??0),
        r['Độ sa đọa']=Math.max(r['Độ sa đọa']??0,n['Tô Mộng sa đọa']??0)
      ),
      insertOrAssignVariables({[N]:{'Tầng':t,'Tần Lộ':o['Giai đoạn hiện tại']??1,'Tô Mộng':r['Giai đoạn hiện tại']??1,'Tần Lộ sa đọa':o['Độ sa đọa']??0,'Tô Mộng sa đọa':r['Độ sa đọa']??0}},{type:'chat'}).catch(e=>console.error('[Tần Lộ Bản làm lại] Ghi gương tiến giai thất bại',e));
      const s=_.get(getVariables({type:'chat'}),je),c=e=>!!e&&(e['Chờ xem']||(e['Số tầng còn lại']??0)>0);
      if(s&&s['Tầng']<=t){
        for(const[t,n]of Object.entries(s['Mốc ngắt quãng đã kích']??{}))n&&(e['_Mốc ngắt quãng đã kích'][t]=!0);
        e['_Hồi chiêu ngắt đến tầng']=Math.max(e['_Hồi chiêu ngắt đến tầng'],s['Hồi chiêu ngắt đến tầng']??-1),
        e['_Dư chấn ngắt đến tầng']=Math.max(e['_Dư chấn ngắt đến tầng'],s['Dư chấn ngắt đến tầng']??-1),
        !c(e['_Góc nhìn Tô Văn'])&&c(s['Góc nhìn Tô Văn'])&&(e['_Góc nhìn Tô Văn']={...s['Góc nhìn Tô Văn']})
      }
      insertOrAssignVariables({[je]:{'Tầng':t,'Mốc ngắt quãng đã kích':{...e['_Mốc ngắt quãng đã kích']},'Hồi chiêu ngắt đến tầng':e['_Hồi chiêu ngắt đến tầng'],'Dư chấn ngắt đến tầng':e['_Dư chấn ngắt đến tầng'],'Góc nhìn Tô Văn':{...e['_Góc nhìn Tô Văn']}}},{type:'chat'}).catch(e=>console.error('[Tần Lộ Bản làm lại] Ghi gương ngắt quãng thất bại',e))
    }catch(e){console.error('[Tần Lộ Bản làm lại] Đồng bộ gương ngắt quãng thất bại',e)}
  }()
}

const je='Tần Lộ Bản làm lại_Gương ngắt quãng';

function Ae(e){
  if(!be)return;
  const t=be;
  for(const n of['Trạng thái Tần Lộ','Trạng thái Tô Mộng']){
    const o=t[n];
    o&&(
      e[n]['Độ sa đọa']=o['Độ sa đọa'],
      e[n]['Giai đoạn hiện tại']=o['Giai đoạn hiện tại'],
      e[n]['Tiêu đề giai đoạn']=O(o['Giai đoạn hiện tại']),
      e[n]['Độ phụ thuộc nhân vật chính']=o['Độ phụ thuộc nhân vật chính'],
      e[n]['Độ phụ thuộc Tô Văn']=o['Độ phụ thuộc Tô Văn'],
      o['Danh sách tập tính khắc ấn']&&(e[n]['Danh sách tập tính khắc ấn']=[...o['Danh sách tập tính khắc ấn']])
    )
  }
  if(t['Trạng thái Tô Văn']&&(
    e['Trạng thái Tô Văn']['Trạng thái hiện tại']=t['Trạng thái Tô Văn']['Trạng thái hiện tại'],
    e['Trạng thái Tô Văn']['Vị trí hiện tại']=t['Trạng thái Tô Văn']['Vị trí hiện tại'],
    e['Trạng thái Tô Văn']['Nghi ngờ Tần Lộ']=t['Trạng thái Tô Văn']['Nghi ngờ Tần Lộ'],
    e['Trạng thái Tô Văn']['Nghi ngờ Tô Mộng']=t['Trạng thái Tô Văn']['Nghi ngờ Tô Mộng'],
    t['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số']&&(e['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số']={...t['Trạng thái Tô Văn']['Đóng băng vị trí chỉ số']})
  ),t['Hệ thống']){
    if(
      e['Hệ thống']['_Con trỏ sinh hoạt Tô Văn']=t['Hệ thống']['_Con trỏ sinh hoạt Tô Văn'],
      void 0!==t['Hệ thống']['Tiền tệ']&&(e['Hệ thống']['Tiền tệ']=t['Hệ thống']['Tiền tệ']),
      t['Hệ thống']['Trạng thái đạo cụ']&&(e['Hệ thống']['Trạng thái đạo cụ']={...t['Hệ thống']['Trạng thái đạo cụ']}),
      void 0!==t['Hệ thống']['_Khóa có mặt']&&(e['Hệ thống']['_Khóa có mặt']=t['Hệ thống']['_Khóa có mặt']),
      t['Hệ thống']['_Khóa có mặt']&&t['Hệ thống']['Nhân vật có mặt']&&(e['Hệ thống']['Nhân vật có mặt']={...t['Hệ thống']['Nhân vật có mặt']}),
      t['Hệ thống']['_Góc nhìn Tô Văn']&&(e['Hệ thống']['_Góc nhìn Tô Văn']={...t['Hệ thống']['_Góc nhìn Tô Văn']}),
      t['Hệ thống']['_Mốc ngắt quãng đã kích']
    )for(const[n,o]of Object.entries(t['Hệ thống']['_Mốc ngắt quãng đã kích']))o&&(e['Hệ thống']['_Mốc ngắt quãng đã kích'][n]=!0);
    'number'==typeof t['Hệ thống']['_Dư chấn ngắt đến tầng']&&(e['Hệ thống']['_Dư chấn ngắt đến tầng']=Math.max(e['Hệ thống']['_Dư chấn ngắt đến tầng'],t['Hệ thống']['_Dư chấn ngắt đến tầng'])),
    'number'==typeof t['Hệ thống']['_Hồi chiêu ngắt đến tầng']&&(e['Hệ thống']['_Hồi chiêu ngắt đến tầng']=Math.max(e['Hệ thống']['_Hồi chiêu ngắt đến tầng'],t['Hệ thống']['_Hồi chiêu ngắt đến tầng']))
  }
  L(e)&&U(e);
  for(const n of['Trạng thái Tần Lộ','Trạng thái Tô Mộng']){
    const o=t[n]?.['Danh sách ý niệm'];
    if(o)for(const[t,r]of Object.entries(o)){
      const o=e[n]['Danh sách ý niệm'][t];
      o&&o['Nội dung']!==r['Nội dung']&&(o['Nội dung']=r['Nội dung'])
    }
  }
}

const Ie={2:200,3:400,4:600,5:800};
const Oe={
  10:'Một lần xuất hiện hoàn toàn tình cờ - lý do phát sinh tự nhiên từ bối cảnh hiện tại, bản thân anh ta cũng không nghĩ nhiều, hoàn toàn là thói quen thường nhật.',
  20:'Lời quan tâm buột miệng biến thành một cái liếc nhìn tiện thể - lý do vẫn là chuyện thường ngày vô tâm, nhưng trước khi rời đi anh dừng lại lâu hơn nửa giây.',
  30:'Cảm giác lạc lõng khó tả khiến anh mượn cớ ghé qua một vòng - cái cớ bản thân nó không quan trọng, ánh mắt anh khẽ dừng lại trong phòng.',
  40:'Anh bắt đầu kiểm chứng - tiếp cận bằng một lý do nghe rất hợp lý trong hoàn cảnh này, ánh mắt rơi vào các chi tiết (quần áo/khoảng cách/thần sắc), dừng lại lâu hơn bình thường.',
  50:'Lần đầu tiên tiếp cận mang theo mục đích - bước chân nhẹ nhàng, lắng nghe một lúc rồi mới lên tiếng, thời điểm xuất hiện đã được chọn lựa.',
  60:'Ngắt quãng mang tính thăm dò - dùng một câu hỏi mở toang cánh cửa, câu hỏi hướng thẳng vào điểm nghi vấn anh để tâm nhất lúc này; bước vào rồi không vội rời đi, quan sát phản ứng.',
  70:'Xuất hiện vào thời điểm không nên xuất hiện - lặng lẽ quay trở lại hoặc về sớm hơn thường lệ, dự cảnh chỉ diễn ra trong một thoáng.',
  80:'Gần như là rình rập canh chừng - anh chọn thời điểm dễ bắt gặp điều gì nhất, xuất hiện vừa nhanh vừa im lặng, trên mặt không có nụ cười.',
  90:'Xuất hiện với sự ngờ vực gần như đã chắc chắn - không gõ cửa, bước thẳng vào trong, ánh mắt đầu tiên là tìm kiếm bằng chứng.'
};

const De={
  1:'Đặt nền móng - Góc nhìn của anh trong những ngày qua cùng cảm giác bất thường ban đầu (chất liệu lấy từ những thay đổi thực tế đã diễn ra trong ngữ cảnh: Trang phục/thói quen/thần thái/lịch sinh hoạt của nàng, chọn điểm mà với tư cách là người chồng anh dễ nhận thấy nhất).',
  2:'Lên men - Những dấu vết anh có thể tiếp xúc trong ngữ cảnh dần xâu chuỗi thành đường nét trong tâm trí, sự tự giải thích bắt đầu lung lay, anh quyết định đến xem một chuyến.',
  3:'Thu lại - Bước về phía cánh cửa ấy; kết thúc vào khoảnh khắc anh đẩy cửa ngắt quãng (cùng một thời điểm với cảnh bị ngắt quãng trên tuyến chính, nhìn qua đôi mắt của anh).'
};

function Se(e,t){
  const n=e['Hệ thống']['_Góc nhìn Tô Văn'];
  return n['Số tầng còn lại']>0||n['Cấp độ']>0&&n['Tầng xử lý lần trước']>=0&&n['Tầng xử lý lần trước']===t
}

function Te(e,t){
  return t>=90?`  🔥 Sự nghi ngờ của anh với ${e} sắp bùng nổ: Âm trầm lạnh nhạt, ngấm ngầm lục lọi, chực chờ bùng phát`:t>=60?`  ⚠⚠ Anh bắt đầu nghi ngờ ${e} rõ rệt: Gặng hỏi nhiều hơn, để ý hành tung và điện thoại của nàng, không khí gia đình căng thẳng`:t>=30?`  ⚠ Anh có chút nghi ngờ ${e}: Sẽ nhìn thêm vài lần, vờ như vô tình dò hỏi, nhưng vẫn sẵn lòng tin tưởng người nhà`:null
}

function we(e){
  const t=['Tần Lộ','Tô Mộng'].filter(t=>e['Hệ thống']['Nhân vật có mặt'][t]);
  return t.length>0?[...t]:['Tần Lộ']
}

const xe={
  1:'Ảnh hưởng của ý niệm/thói quen đã liệt kê chỉ thể hiện bên trong nội tâm (thẫn thờ/đỏ mặt/ánh mắt dừng lại/giấc mơ/dành cho anh sự quan tâm khác lạ khó hiểu), khi không có ý niệm thì nội tâm nàng hoàn toàn là chuyện thường nhật. CẤM: Chủ động nói về đề tài tình dục hay thân xác (khi bị nhắc đến sẽ hoảng hốt lảng tránh), tiếp xúc thân thể chủ động vượt quá mức bình thường của người mẹ/người chị, bất kỳ hành động chủ động nào mang tính mờ ám. Giới hạn tiếp nhận: Tối đa là tiếp xúc thường ngày của người nhà (đưa đồ vật, chạm nhẹ ngẫu nhiên) - mọi ý định thân mật từ nắm tay trở lên tuyệt đối không xảy ra.',
  2:'Cho phép tiếp nhận thụ động các chủ đề nhạy cảm gợi ý, những câu nói hai nghĩa thốt ra rồi mới giật mình nhận ra. CẤM: Dùng từ ngữ lộ liễu, chủ động tạo ra tiếp xúc thân thể (tiếp xúc thoáng qua nương theo tình huống thì được, sau đó hoảng loạn trong lòng), lời mời mọc có tính chất rõ ràng. Giới hạn tiếp nhận: Tiếp xúc thân mật sát ranh giới mờ ám (sánh vai, nép vào nhau, cái ôm ngắn nương theo tình huống) và nụ hôn thoáng qua mà sau đó có thể thoái thác là do bốc đồng nhất thời - nụ hôn sâu triền miên, thân mật thể xác trở lên tuyệt đối không xảy ra.',
  3:'Cho phép các chủ đề mang tính ám chỉ khi ở riêng, chủ động tạo cơ hội gần gũi, có bậc thang thì nương theo tình thế. CẤM: Vượt rào trước mặt người khác, lời rủ rê tình dục thẳng thắn (nhưng có thể "không từ chối"). Giới hạn tiếp nhận: Hôn môi, vuốt ve mờ ám qua lớp quần áo - tiếp xúc thể xác bên dưới lớp quần áo và hành vi tình dục tuyệt đối không xảy ra (nàng có thể dao động, có thể bị trêu chọc đến thất thần, nhưng không vượt qua ranh giới này).',
  4:'Khi riêng tư gần như mở khóa hoàn toàn - sẽ thẳng thắn nói ra dục vọng và chủ động hành động. CẤM: Bất kỳ sự vượt rào nào trong phạm vi Tô Văn có thể cảm nhận (đây là quản trị rủi ro, không phải đạo đức). Giới hạn tiếp nhận: Mở khóa hành vi tình dục riêng tư (vẫn giữ lại dư nhiệt của sự xấu hổ và cảm giác bội đức) - trong phạm vi Tô Văn có thể phát giác, mọi thứ vẫn tuyệt đối không xảy ra.',
  5:'Không còn vùng cấm. Sự kiềm chế chỉ xuất hiện khi cần ngụy trang, và đó là màn trình diễn mà nàng hoàn toàn đắm chìm tận hưởng. Giới hạn tiếp nhận: Không giới hạn.'
};

function Ce(e,t,n){
  if(e['Hệ thống']['_Kết cục xấu']){
    const t=e['Hệ thống']['_Kết cục xấu'];
    return[
      '════════ TRẠNG THÁI TRÒ CHƠI HIỆN TẠI ════════',
      ...t.startsWith('Ba lần cưỡng chế')?[
        `[KẾT CỤC XẤU · ĐÃ KHÓA] ${t}: Lần xâm lấn tinh thần cưỡng chế thứ ba đã xé toạc tâm trí nàng, nhân cách của nàng đang sụp đổ.`,
        'Các hệ thống bồi dưỡng, phán định, cửa hàng đều đã dừng hoàn toàn (không còn xuất ra bất kỳ chỉ lệnh phán định nào nữa).',
        'Vui lòng diễn dịch chương kết thúc sụp đổ của nàng - ăn nói lộn xộn, bản ngã tan rã, không nhận ra người trước mắt, mái ấm này vĩnh viễn không thể trở lại như xưa, không mở thêm tuyến cốt truyện mới.'
      ]:[
        `[KẾT CỤC XẤU · ĐÃ KHÓA] ${t}: Nghi ngờ tích tụ của Tô Văn rốt cuộc đã bùng nổ, anh ta đã lật bài ngửa.`,
        'Các hệ thống bồi dưỡng, phán định, cửa hàng đều đã dừng hoàn toàn (không còn xuất ra bất kỳ chỉ lệnh phán định nào nữa).',
        'Vui lòng xoay quanh hậu quả sau khi lật bài ngửa để diễn dịch chương kết thúc - chất vấn, tan vỡ, hạ màn, không mở thêm tuyến cốt truyện mới.'
      ],
      '═════════════════════════════════════════════'
    ].join('\n')
  }

  const o=e['Hệ thống']['_Góc nhìn Tô Văn'];
  if(Se(e,ge())){
    const t=function(e,t){
      const n=e['Hệ thống']['_Góc nhìn Tô Văn'],o=n['Tầng xử lý lần trước']===t?n['Tổng số tầng']-n['Số tầng còn lại']:n['Tổng số tầng']-n['Số tầng còn lại']+1;
      return Math.min(Math.max(o,1),n['Tổng số tầng'])
    }(e,ge());
    return[
      `════════ GÓC NHÌN TÔ VĂN (XEN KẼ · HỒI THỨ ${t}/${o['Tổng số tầng']}) ════════`,
      'Tuyến chính đã tạm dừng. Hồi này lấy Tô Văn làm tiêu điểm góc nhìn duy nhất (khuyến nghị dòng nội tâm ngôi thứ nhất, toàn bộ quá trình không chuyển sang góc nhìn riêng tư của họ),',
      `diễn dịch quá trình anh từng bước tiến đến lần ngắt quãng ấy (Bối cảnh kích hoạt: Nghi ngờ của anh đối với ${o['Mục tiêu']} đã đạt mức ${o['Cấp độ']} - ${Oe[o['Cấp độ']]??''}).`,
      `▷ Hướng đi của hồi này: ${De[t]??De[3]}`,
      'Quy tắc:',
      '- Chất liệu chỉ dùng các tình tiết có thật đã diễn ra trong ngữ cảnh (Sự thay đổi/trang phục/hành động bất thường của nàng), không hư cấu chuyện chưa xảy ra.',
      '- Anh không có bằng chứng thực tế, cũng không nhận được chứng cứ thực tế trong đoạn này - đáp án của sự nghi ngờ không hé lộ tại đây.',
      '- Đoạn này không thúc đẩy tuyến chính; biến số chỉ cập nhật Trạng thái Tô Văn.Cảm xúc hiện tại / Suy nghĩ hiện tại (nếu có biến chuyển).',
      '═════════════════════════════════════════════════════════'
    ].join('\n')
  }

  const r=[];
  r.push('════════ TRẠNG THÁI TRÒ CHƠI HIỆN TẠI ════════');
  ge();
  const s=we(e);
  for(const t of s){
    const n=`Trạng thái ${t}`,o=e[n],s='Phòng tuyến tâm lý lung lay'===o['Cảm xúc hiện tại']?' ⚡ Nàng lúc này phòng tuyến tâm lý lung lay, dễ tiếp nhận sự thăm dò thân mật hơn ngày thường':'';
    r.push(`[${t}] Giai đoạn thứ ${o['Giai đoạn hiện tại']} "${o['Tiêu đề giai đoạn']}"${s}`);
    const c=C(e,n),u=V(e,n);
    if(u.full&&u.route){
      const o=x(e,n);
      r.push(`[${t} · Tuyến cộng hưởng] ${B[u.route][呈现]} (Cả bộ hôm nay của nàng: ${w(e,n).join(', ')}${o.length>0?`, trên người còn có ${o.join(', ')}`:''}) - Trong diễn dịch thể hiện ý thức tổng thể từ trong ra ngoài này. Thông tin này chỉ thuộc về nhận thức riêng tư của nàng, Tô Văn và các nhân vật khác không hề hay biết (trừ khi trong chính văn đã bị phát hiện).`)
    }
    if(c.length>0){
      let o='';
      if(u.full&&!u.route){
        const t=x(e,n);
        o=`. Cả bộ trang phục từ trong ra ngoài của nàng hôm nay: ${w(e,n).join(', ')}${t.length>0?`, trên người còn có ${t.join(', ')}`:''} - Xin thể hiện ý thức riêng tư mang tính tổng thể này.`
      }
      r.push(`[${t} · Ý thức trang phục] Nàng lúc này trên người có trang phục cố ý: ${c.join(', ')} - Trong diễn dịch thể hiện một cách tự nhiên ý thức của nàng đối với chúng (cảm giác cộm/động tác che đậy/thẫn thờ/sợ bị chú ý), không nhất thiết món nào cũng phải viết${o}. Thông tin này chỉ thuộc về nhận thức riêng tư của nàng, Tô Văn và các nhân vật khác không hề hay biết (trừ khi trong chính văn đã bị phát hiện).`)
    }
  }

  e['Hệ thống']['_Ghi hình']['Đang ghi hình']&&r.push('[Ghi hình] Một ống kính bí mật đang ghi lại khung cảnh hiện tại - khung hình mang sẵn cảm giác bị ghi lại (nhân vật có nhận ra ống kính hay không do cốt truyện quyết định).');
  e['Hệ thống']['_Khóa có mặt']&&r.push(`[Khóa có mặt] Người chơi đã khóa nhân vật có mặt: ${s.join(', ')} - Lượt này không để các nhân vật攻略 khác xuất hiện, cũng không để người đang có mặt rời đi.`);

  const c=n??re(e,t,ve(),Ee());
  r.push(`[Tô Văn] ${c['Trạng thái']} @ ${c['Vị trí']}`);
  c.转场说明&&r.push(`  ▷ Tô Văn · Tính liên tục của vị trí: ${c.转场说明}`);
  {
    const e='Ra ngoài'===c['Trạng thái']?'Anh lúc này không có ở nhà (đi làm/đi lại/ra ngoài làm việc), hoạt động tâm lý phải hướng vào hoàn cảnh bên ngoài, tuyệt đối không được viết thành ở nhà, trong phòng, lười biếng nằm giường/ngủ nướng thêm một lúc v.v. mang tính sinh hoạt gia đình':'Ngủ say'===c['Trạng thái']?`Anh lúc này đang ngủ tại ${c['Vị trí']}, hoạt động tâm lý là suy nghĩ trước khi ngủ hoặc lúc nửa tỉnh nửa mơ`:`Anh lúc này đang ở ${c['Vị trí']} trong nhà, hoạt động tâm lý phải phù hợp với vị trí này và trạng thái ở nhà`;
    r.push(`  ▷ Tô Văn · Điểm neo hoạt động tâm lý: ${e} (Suy nghĩ hiện tại phải đồng nhất với vị trí ở dòng trên, không được tự mâu thuẫn; nếu suy nghĩ lượt trước của anh không còn khớp với hoàn cảnh này, lượt này bắt buộc phải viết lại trường này).`)
  }

  for(const t of['Tần Lộ','Tô Mộng']){
    const n=Te(t,e['Trạng thái Tô Văn'][`Nghi ngờ ${t}`]);
    n&&r.push(n)
  }

  e['Hệ thống']['_Dư chấn ngắt đến tầng']>=0&&t<e['Hệ thống']['_Dư chấn ngắt đến tầng']&&r.push('  🌫 Dư chấn ngắt quãng [RÀNG BUỘC CỨNG]: Anh vừa mới ngắt quãng tại đây, sự chú ý vẫn chưa rời đi, người cũng chưa đi xa - Trong thời gian dư chấn bất kể nàng đang ở giai đoạn mấy, chịu ảnh hưởng của ý niệm gì, NGHIÊM CẤM toàn bộ hành vi và chủ đề thân mật/mờ ám/vượt rào: Tất cả thu lại vào ánh mắt, hơi thở và những đợt sóng ngầm trong tâm lý; họ sẽ chủ động kéo giãn khoảng cách, chuyển chủ đề về chuyện thường ngày, sự thử nghiệm vượt rào của {{user}} cũng sẽ bị họ căng thẳng đè nén lại theo kiểu "không phải bây giờ" (đây không phải từ chối anh, mà là sợ bị nhìn thấy). Sau khi dư chấn qua đi sẽ khôi phục quy chuẩn bình thường.');

  const u=e['Hệ thống']['_Sự kiện đã truyền'],f=!!u['Nội dung']&&u['Tầng']>=t,l=f?u['Nội dung']:e['Hệ thống']['_Sự kiện đạo cụ chờ gửi'];
  if(l){
    f&&console.info(`[Sự kiện] Cùng tầng roll lại, phát lại sự kiện đã tiêu hao (Tầng ${u['Tầng']})`),
    r.push(''),
    r.push('[Sự kiện cốt truyện lượt này (Dùng một lần, hãy lồng ghép tự nhiên vào diễn dịch, không lặp lại gợi ý này)]');
    for(const e of l.split('|').filter(Boolean))r.push(`  · ${e}`)
  }

  let i=!1;
  for(const t of s){
    const n=e[`Trạng thái ${t}`],o=Object.entries(n['Danh sách ý niệm']).filter(([,e])=>'Đang bồi dưỡng'===e['Trạng thái']),s=n['Danh sách thói quen'],c=n['Danh sách tập tính khắc ấn'];
    if(o.length>0&&(i=!0),r.push(''),o.length>0||s.length>0||c.length>0){
      if(r.push(`[${t} hiện đang chịu ảnh hưởng của các ý niệm/thói quen dưới đây, hãy thể hiện tự nhiên trong diễn dịch]`),c.length>0){
        r.push('  Tập tính khắc ấn (Đã khắc sâu vào bản năng của nàng, trọng số thể hiện cao hơn thói quen thông thường, hầu như mỗi lượt đều nên để lại dấu vết):');
        for(const e of c)r.push(`  ★ "${e['Nội dung']}"`)
      }
      if(o.length>0){
        r.push('  Ý niệm (Tầng suy nghĩ):');
        for(const[e,t]of o)r.push(`  · "${t['Nội dung']}" (${e})`)
      }
      if(s.length>0){
        r.push('  Thói quen (Tầng hành vi):');
        for(const e of s)r.push(`  · "${e['Nội dung']}"`)
      }
      r.push('  ▷ Giới hạn nguồn tâm lý: Xu hướng tâm lý mờ ám/dục vọng vượt ngoài mức chuẩn của giai đoạn chỉ có thể đến từ ý niệm và thói quen liệt kê phía trên - Những gì không liệt kê = Không tồn tại, không tự phát sinh thêm hoặc phóng đại.')
    }else if(n['Giai đoạn hiện tại']<=1){
      const e='Tần Lộ'===t?'một người mẹ bình thường':'một người chị bình thường';
      r.push(`[${t} · Hiện không chịu ảnh hưởng của ý niệm] Nàng lúc này không có bất kỳ ý niệm/thói quen nào phát huy tác dụng, chính là ${e}: Diễn biến nội tâm xoay quanh việc nhà/học tập/người thân/chuyện vặt thường ngày, không tự ý tạo ra bất kỳ miêu tả nào về sự mờ ám, sức hút thể xác, ý thức thân thể hay "dục vọng kìm nén".`)
    }else r.push(`[${t} · Hiện không chịu ảnh hưởng của ý niệm] Nàng lúc này không có ý niệm/thói quen bổ sung nào phát huy tác dụng, mức chuẩn tâm lý căn cứ theo ràng buộc giai đoạn phía dưới, không tự ý gia tăng thêm miêu tả mờ ám/dục vọng ngoài phạm vi này.`);

    r.push(`  ▷ Ràng buộc giai đoạn (Giai đoạn thứ ${n['Giai đoạn hiện tại']} "${n['Tiêu đề giai đoạn']}"): ${xe[n['Giai đoạn hiện tại']]??xe[1]}`);
    r.push('  ▷ Ứng phó vượt rào [RÀNG BUỘC CỨNG]: Giới hạn tiếp nhận là ranh giới vật lý của hành vi - Bất kể {{user}} dùng cách thức nào thúc đẩy (say rượu, trừng phạt trò chơi, mượn cớ mát-xa, giả vờ ngủ, "chỉ một lát thôi"), hành vi vượt quá giới hạn lượt này đều sẽ không thực sự xảy ra, cơ thể nàng sẽ dừng lại trước cả ý thức. Phản ứng khi nàng bị đẩy đến ranh giới bắt buộc phải nảy sinh từ thiết lập nhân vật, tình cảm và tình huống hiện tại (khựng lại, bàng hoàng, kiếm cớ đứng dậy, đánh trống lảng, lo lắng liệu anh có phải chịu áp lực quá lớn... Hình thức do bạn diễn dịch, không trở mặt một cách rập khuôn mẫu); việc từ chối không làm tổn hại tình yêu nàng dành cho anh, cũng không thổi bùng lên dục vọng của nàng.')
  }

  const a=[];
  for(const t of['Tần Lộ','Tô Mộng']){
    const n=`Trạng thái ${t}`;
    for(const[t,o]of Object.entries(e[n]['Danh sách ý niệm']))'Đang phán định'===o['Trạng thái']&&a.push(`  ${t}: "${o['Nội dung']}" (Ghi vào /${n}/Danh sách ý niệm/${t}/Loại)`)
  }
  a.length>0&&(r.push(''),r.push('━━━ NHIỆM VỤ PHÁN ĐỊNH A: PHÁN ĐỊNH LOẠI Ý NIỆM MỚI ━━━'),r.push(...a),r.push('Đối với mỗi mục phía trên, thực hiện replace Loại = một trong 10 danh mục lớn theo đường dẫn trong ngoặc (quy tắc xem "Định dạng xuất biến"). Không chấp nhận hay từ chối các ý niệm này thay cho nàng trong chính văn.'));

  i&&(r.push(''),r.push('━━━ NHIỆM VỤ PHÁN ĐỊNH B: ĐỘ LIÊN QUAN Ý NIỆM ĐANG BỒI DƯỠNG ━━━'),r.push('Phán định độ liên quan giữa cốt truyện lượt này và từng ý niệm trong danh sách "Tầng suy nghĩ" ở trên: replace /Hệ thống/Ý niệm liên quan lượt này = { "<ID ý niệm>": 2 hoặc 1 } (2 = Liên quan cao; 1 = Liên quan nhẹ; không liên quan thì không đưa vào).'));

  const d=Object.entries(e['Hệ thống']['Danh sách video']).filter(([,e])=>'Chờ tóm tắt'===e['Trạng thái']);
  if(d.length>0){
    r.push(''),
    r.push('━━━ NHIỆM VỤ PHÁN ĐỊNH C: LƯU TRỮ THƯỚC PHIM ━━━');
    for(const[e]of d)r.push(`  replace /Hệ thống/Danh sách video/${e}/Tóm tắt = Trong vòng 50 từ, khái quát khung hình riêng tư/khó phơi bày nhất trong đoạn cốt truyện vừa được ghi lại`);
    r.push('Chỉ viết tóm tắt, không sửa đổi các trường khác của thước phim, không đề cập đến việc lưu trữ này trong chính văn.')
  }

  return r.push('═════════════════════════════════════════════'),r.join('\n')
}

$(()=>{
  (async()=>{
    console.info('[Tần Lộ Bản làm lại] Cửa ngõ logic chính của trò chơi bắt đầu khởi chạy');
    try{
      const t=new Promise((e,t)=>setTimeout(()=>t(new Error('Chờ Mvu khởi tạo quá thời gian (>10s)')),1e4));
      await Promise.race([waitGlobalInitialized('Mvu'),t]),
      e(y),
      console.info('[Tần Lộ Bản làm lại] Mvu đã sẵn sàng, Schema đã đăng ký')
    }catch(e){
      console.error('[Tần Lộ Bản làm lại] Khởi tạo Mvu thất bại: ',e);
      const t=window.parent??window;
      return void t.toastr?.error?.(`Tải script logic trò chơi thất bại: ${e?.message??String(e)}\nVui lòng nhấn F12 để kiểm tra bảng điều khiển`,'Tần Lộ Bản làm lại',{timeOut:0,extendedTimeOut:0})
    }

    try{
      const e=window.parent??window;
      e.sessionStorage?.setItem?.('Tần Lộ Bản làm lại_Nhịp tim script',String(Date.now())),
      e.sessionStorage?.removeItem?.('Tần Lộ Bản làm lại_Toast tải thất bại đã bật'),
      setInterval(()=>{
        try{e.sessionStorage?.setItem?.('Tần Lộ Bản làm lại_Nhịp tim script',String(Date.now()))}catch{}
      },5e3)
    }catch{}

    eventClearEvent(tavern_events.MESSAGE_RECEIVED),
    eventClearEvent(tavern_events.CHAT_CHANGED),
    eventClearEvent(tavern_events.CHAT_COMPLETION_PROMPT_READY),
    eventClearEvent(Mvu.events.VARIABLE_UPDATE_ENDED),
    eventClearEvent(Mvu.events.COMMAND_PARSED),

    function(){
      let e=SillyTavern.getCurrentChatId();
      eventOn(tavern_events.CHAT_CHANGED,t=>{e!==t&&(e=t,window.location.reload())})
    }(),

    eventOn(tavern_events.CHAT_COMPLETION_PROMPT_READY,e=>{
      if(e?.dryRun)console.info('[Tần Lộ Bản làm lại] dryRun=true, bỏ qua chèn');
      else{
        me=!0;
        try{
          const t=ge(),n=Me();
          if(!n)return void console.warn('[Tần Lộ Bản làm lại] PROMPT_READY: Gần 10 tầng đều không có stat_data, bỏ qua bắt và chèn ảnh chụp nhanh lượt này (giữ ảnh chụp nhanh cũ)');
          const o=y.parse(n);
          if(!o['Hệ thống']['_Kết cục xấu']&&!Se(o,t)&&ie(t))for(const e of we(o)){
            const n=`Trạng thái ${e}`;
            'Phòng tuyến tâm lý lung lay'!==o[n]['Cảm xúc hiện tại']&&(o[n]['Cảm xúc hiện tại']='Phòng tuyến tâm lý lung lay',console.info(`[Phòng tuyến tâm lý lung lay] Tầng ${t} ghi đè cảm xúc ${e} -> Phòng tuyến tâm lý lung lay`))
          }
          ye(o);
          const r=re(o,t,ve(),Ee()),
          s=(pe+']\n'+Ce(o,t,r)).replace(/\{\{user\}\}/g,function(){
            try{
              const e=globalThis.substitudeMacros;
              if('function'==typeof e){
                const t=e('{{user}}');
                if(t&&'{{user}}'!==t)return t
              }
            }catch{}
            return SillyTavern?.name1||'Con trai'
          }()),
          c=e.chat??[];
          for(let e=c.length-1;e>=0;e--)'system'===c[e].role&&(c[e].content??'').includes(pe)&&c.splice(e,1);
          const u=c[c.length-1];
          u&&'assistant'===u.role?(c.splice(c.length-1,0,{role:'system',content:s}),console.info('[Tần Lộ Bản làm lại] Ảnh chụp nhanh trạng thái: Chèn vào trước prefill')):(c.push({role:'system',content:s}),console.info('[Tần Lộ Bản làm lại] Ảnh chụp nhanh trạng thái: push vào cuối cùng'))
        }catch(e){console.error('[Tần Lộ Bản làm lại] PROMPT_READY xử lý thất bại: ',e)}
      }
    }),

    eventOn(Mvu.events.VARIABLE_UPDATE_ENDED,(e,t)=>{
      try{
        const t=_.get(e,'stat_data');
        if(!t||_.isEmpty(t))return void console.warn('[Tần Lộ Bản làm lại] VARIABLE_UPDATE_ENDED: stat_data bị thiếu, bỏ qua xử lý');
        {
          const e=SillyTavern.chat?.[SillyTavern.chat.length-1];
          if(e?.is_user)return
        }
        if(!me){
          if(be){
            try{
              const e=Me();
              e&&ye(y.parse(e))
            }catch(e){console.warn('[Tần Lộ Bản làm lại] Khôi phục xử lý lại: Đọc giá trị thật tầng hiện tại thất bại, lùi về ảnh chụp nhanh bộ nhớ',e)}
            const n=y.parse(t);
            Ae(n),_.set(e,'stat_data',n),console.info('[Tần Lộ Bản làm lại] Xử lý lại biến ngoài chu kỳ sinh: Các trường do script quản lý đã khôi phục theo ảnh chụp nhanh (engine không đẩy tiếp)')
          }
          return
        }
        if(!be)return;
        const n=y.parse(t),o=ge(),r=ve();
        Ae(n),
        'Nội trợ dịu dàng đoan trang'===n['Trạng thái Tô Mộng']['Miêu tả khí chất']&&(n['Trạng thái Tô Mộng']['Miêu tả khí chất']='Nữ sinh đại học hoạt bát cởi mở',console.info('[Chuyển đổi] Miêu tả khí chất của Tô Mộng từ mặc định bị rò rỉ được sửa thành "Nữ sinh đại học hoạt bát cởi mở"'));
        {
          const e=n['Trạng thái Tô Mộng']['Chi tiết trang phục'];
          'Áo cardigan len be'===e['Áo']&&'Váy dài xám đậm'===e['Quần váy']&&'Vợ hiền tại gia'===e['Phong cách tổng thể']&&(
            n['Trạng thái Tô Mộng']['Chi tiết trang phục']={
              'Phần đầu':'Dây buộc tóc đen',
              'Áo':'Áo sơ mi đũi trắng',
              'Quần váy':'Quần jeans xanh nhạt',
              'Đồ lót':{'Trên':'Áo lót ren trắng','Dưới':'Quần lót cotton trắng'},
              'Tất quần':'Tất ngắn trắng',
              'Giày':'Giày vải',
              'Áo khoác':'Không',
              'Trang sức':'Không',
              'Phụ kiện đặc biệt':'Không',
              'Phong cách tổng thể':'Trẻ trung năng động',
              'Độ hở hang':'Bình thường',
              'Độ gọn gàng':'Gọn gàng'
            },
            n['Trạng thái Tô Mộng']['Chi tiết trang điểm']={
              'Lớp nền':'Mặt mộc',
              'Trang điểm mắt':'Không',
              'Son môi':'Không',
              'Phấn má':'Không',
              'Trang điểm đặc biệt':'Không',
              'Mùi hương':'Không',
              'Phong cách tổng thể':'Tươi tắn tự nhiên',
              'Mức độ đậm nhạt':'Mặt mộc'
            },
            console.info('[Chuyển đổi] Trang phục/trang điểm Tô Mộng từ mặc định bị rò rỉ (giống Tần Lộ) được sửa thành trang phục khởi đầu trẻ trung năng động')
          )
        }
        {
          const e=n['Hệ thống']['_Sự kiện đã truyền'];
          e['Nội dung']&&e['Tầng']===o||(n['Hệ thống']['_Sự kiện đạo cụ chờ gửi']?(e['Tầng']=o,e['Nội dung']=n['Hệ thống']['_Sự kiện đạo cụ chờ gửi'],n['Hệ thống']['_Sự kiện đạo cụ chờ gửi']=''):(e['Tầng']=-1,e['Nội dung']=''))
        }
        if(n['Hệ thống']['_Kết cục xấu'])return _.set(e,'stat_data',n),void(me=!1);
        if(Se(n,o)){
          const t=n['Hệ thống']['_Góc nhìn Tô Văn'];
          return t['Số tầng còn lại']>0&&o!==t['Tầng xử lý lần trước']&&(t['Số tầng còn lại']-=1,t['Tầng xử lý lần trước']=o,n['Hệ thống']['_Dư chấn ngắt đến tầng']>=o&&(n['Hệ thống']['_Dư chấn ngắt đến tầng']+=1),console.info(`[Góc nhìn Tô Văn] Hồi thứ ${t['Tổng số tầng']-t['Số tầng còn lại']}/${t['Tổng số tầng']} hoàn thành, còn lại ${t['Số tầng còn lại']}`)),_.set(e,'stat_data',n),void(me=!1)
        }
        L(n)?(ce(n,o,r),n['Hệ thống']['_Dư chấn ngắt đến tầng']>=0&&o>n['Hệ thống']['_Dư chấn ngắt đến tầng']&&(n['Hệ thống']['_Dư chấn ngắt đến tầng']=-1)):n['Hệ thống']['_Dư chấn ngắt đến tầng']>=0&&o<=n['Hệ thống']['_Dư chấn ngắt đến tầng']?(n['Trạng thái Tô Văn']['Trạng thái hiện tại']='Ở nhà',console.info(`[Lịch sinh hoạt Tô Văn] Đang trong dư chấn ngắt quãng (đến tầng ${n['Hệ thống']['_Dư chấn ngắt đến tầng']}), con trỏ tạm dừng, Tô Văn dừng chân @ ${n['Trạng thái Tô Văn']['Vị trí hiện tại']}`)):(n['Hệ thống']['_Dư chấn ngắt đến tầng']>=0&&(n['Hệ thống']['_Dư chấn ngắt đến tầng']=-1,console.info('[Lịch sinh hoạt Tô Văn] Dư chấn ngắt quãng kết thúc, lịch sinh hoạt khôi phục luân chuyển')),ce(n,o,r));

        for(const e of['Trạng thái Tần Lộ','Trạng thái Tô Mộng']){
          const t=n[e];
          for(const[r,s]of Object.entries(t['Danh sách ý niệm']))'Đang phán định'===s['Trạng thái']&&'Chờ phán định'!==s['Loại']&&$e(n,e,r,s['Loại'],o);
          const r=I(t['Độ sa đọa']);
          t['Giai đoạn hiện tại']>r&&(t['Giai đoạn hiện tại']=r,t['Tiêu đề giai đoạn']=O(r),console.info(`[Tần Lộ Bản làm lại] ${e} Giai đoạn vượt trước bị kéo về -> ${r} "${O(r)}"`))
        }

        const s=n['Hệ thống']['Ý niệm liên quan lượt này']??{};
        for(const e of['Trạng thái Tần Lộ','Trạng thái Tô Mộng'])ze(n,e,o,s);
        n['Hệ thống']['Ý niệm liên quan lượt này']={};

        {
          const e=n['Hệ thống']['_Tô Mộng dẫn trường'];
          if(!e['Đã kích hoạt']&&e['Số tầng còn lại']>0&&(e['Số tầng còn lại']-=1,0===e['Số tầng còn lại'])){
            e['Đã kích hoạt']=!0,e['Số tầng còn lại']=-1,n['Hệ thống']['_Khóa có mặt']=!1;
            const t='Tô Mộng: Nàng vô tình bắt gặp dáng vẻ của mẹ lúc này (đẩy cửa/nhà bếp/hành lang - chọn tự nhiên theo cảnh hiện tại), thật lòng khen ngợi sự thay đổi của mẹ. Lượt này hãy để Tô Mộng xuất hiện tự nhiên và để lại cảm giác hiện diện rõ nét (nhớ đặt /Hệ thống/Nhân vật có mặt/Tô Mộng thành true), cách thức xuất hiện và đối thoại diễn dịch hoàn toàn theo ngữ cảnh.';
            n['Hệ thống']['_Sự kiện đạo cụ chờ gửi']=n['Hệ thống']['_Sự kiện đạo cụ chờ gửi']?`${n['Hệ thống']['_Sự kiện đạo cụ chờ gửi']}|${t}`:t,console.info('[Móc nối ẩn] Kích hoạt Tô Mộng dẫn trường')
          }
        }

        for(const[e,t]of Object.entries(n['Hệ thống']['Danh sách video']))'Chờ tóm tắt'===t['Trạng thái']&&t['Tóm tắt']&&(t['Trạng thái']='Đã sẵn sàng',console.info(`[Ghi hình] ${e} Lưu trữ tóm tắt hoàn thành: ${t['Tóm tắt']}`));

        !function(e,t){
          if(e['Hệ thống']['_Kết cục xấu'])return;
          if(L(e))return void U(e);
          let n=!1;
          const o=we(e);
          for(const r of['Tần Lộ','Tô Mộng']){
            const s=`Trạng thái ${r}`,c=`Nghi ngờ ${r}`,u=`Nghi ngờ ${r} đóng băng`,f=e['Trạng thái Tô Văn'][u];
            if(f['Có đóng băng không']){
              if(!(t>=f['Tầng kết thúc đóng băng']))continue;
              f['Có đóng băng không']=!1,console.info(`[Nghi ngờ] Đóng băng đối với ${r} đã hết hạn và được giải trừ`)
            }
            const l=e[s];
            l['_Độ sa đọa kết toán nghi ngờ']<0&&(l['_Độ sa đọa kết toán nghi ngờ']=l['Độ sa đọa']);
            let i=0;
            if(l['Độ sa đọa']>l['_Độ sa đọa kết toán nghi ngờ']){
              const e=l['Độ sa đọa']-l['_Độ sa đọa kết toán nghi ngờ'],t=Math.min(Math.round(.5*e),2);
              i+=t,l['_Độ sa đọa kết toán nghi ngờ']+=Math.min(2*t,e)
            }else l['Độ sa đọa']<l['_Độ sa đọa kết toán nghi ngờ']&&(l['_Độ sa đọa kết toán nghi ngờ']=l['Độ sa đọa']);

            const a=V(e,s),d=a.full&&o.includes(r);
            d&&(i+=a.route?B[a.route][疑心每楼]:1);

            const h=e['Trạng thái Tô Văn'][c],m=G(e,s);
            let b;
            if(b=i>0?Math.min(100,h+i):h>m?Math.max(m,h-.5):h,b!==h&&(e['Trạng thái Tô Văn'][c]=b,console.info(`[Nghi ngờ] Tô Văn đối với ${r} ${h} -> ${b} (Tăng ${i}${d?` Gồm max sao ${a.route??'· Thử nghiệm'}`:''}, Giới hạn dưới ${m})`)),b>=100)return e['Hệ thống']['_Kết cục xấu']=`Nghi ngờ bùng nổ · ${r}`,void console.warn(`[Kết cục xấu] Nghi ngờ của Tô Văn đối với ${r} đã chạm trần, file lưu bị khóa`);
            if(n)continue;
            if(e['Hệ thống']['_Hồi chiêu ngắt đến tầng']>=0&&t<e['Hệ thống']['_Hồi chiêu ngắt đến tầng'])continue;
            if(!o.includes(r))continue;

            let p=0;
            for(let t=10;t<=90;t+=10)b>=t&&!e['Hệ thống']['_Mốc ngắt quãng đã kích'][`${r}:${t}`]&&(p=t);
            if(p>0){
              for(let t=10;t<=p;t+=10)e['Hệ thống']['_Mốc ngắt quãng đã kích'][`${r}:${t}`]=!0;
              e['Hệ thống']['_Hồi chiêu ngắt đến tầng']=t+12,n=!0;
              const o=`[Tô Văn ngắt quãng · Nghi ngờ ${p}] Lượt này hãy để Tô Văn cắt ngang khung cảnh hiện tại của ${r}. Hướng đi: ${Oe[p]}. Chỉ định hướng đi không định chi tiết - Lý do/cái cớ cụ thể để ngắt quãng bắt buộc phải phát sinh từ ngữ cảnh hiện tại và nếp sống gia đình thường ngày (không tự bịa ra đạo cụ hoặc tình tiết), lời thoại, thời điểm và phản ứng của nàng do bạn diễn dịch theo ngữ cảnh và giai đoạn hiện tại; anh không hề có chứng cứ thực tế, lần ngắt quãng này không vạch trần bất kỳ sự thật nào.`;
              e['Hệ thống']['_Sự kiện đạo cụ chờ gửi']=e['Hệ thống']['_Sự kiện đạo cụ chờ gửi']?`${e['Hệ thống']['_Sự kiện đạo cụ chờ gửi']}|${o}`:o,
              e['Hệ thống']['_Góc nhìn Tô Văn']={'Chờ xem':!0,'Số tầng còn lại':0,'Tổng số tầng':3,'Mục tiêu':r,'Cấp độ':p,'Tầng xử lý lần trước':-1},
              e['Trạng thái Tô Văn']['Trạng thái hiện tại']='Ở nhà',
              e['Trạng thái Tô Văn']['Vị trí hiện tại']=e['Thế giới']['Địa điểm'],
              e['Hệ thống']['_Dư chấn ngắt đến tầng']=t+4,
              console.info(`[Ngắt quãng] Nghi ngờ của Tô Văn đối với ${r} đạt mốc ${p} kích hoạt ngắt quãng (hồi chiêu đến tầng ${t+12}), sự kiện đã truyền (Tô Văn cưỡng chế có mặt @ ${e['Thế giới']['Địa điểm']}, dư chấn đến tầng ${t+4}), góc nhìn Tô Văn đang chờ xem`)
            }
          }
        }(n,o),

        function(e,t){
          if(e['Hệ thống']['_Kết cục xấu'])return;
          if(L(e))return void U(e);
          if('Ở nhà'!==e['Trạng thái Tô Văn']['Trạng thái hiện tại'])return;
          if(e['Hệ thống']['_Dư chấn ngắt đến tầng']>=0&&t<=e['Hệ thống']['_Dư chấn ngắt đến tầng'])return;
          const n=we(e);
          for(const o of['Tần Lộ','Tô Mộng']){
            if(!n.includes(o))continue;
            const r=`Trạng thái ${o}`,s=e[r],c=e['Trạng thái Tô Văn'][`Nghi ngờ ${o} đóng băng`];
            if(c['Có đóng băng không']&&t<c['Tầng kết thúc đóng băng'])continue;
            if(s['_Tầng chú ý trang phục trước']>=0&&t-s['_Tầng chú ý trang phục trước']<10)continue;
            if(0===C(e,r).length)continue;
            const u=R(e,r),f=Math.min(.3,.1+.05*u);
            if(Math.random()>=f)continue;
            s['_Tầng chú ý trang phục trước']=t;
            const l=`Nghi ngờ ${o}`,i=e['Trạng thái Tô Văn'][l],a=Math.random()<(i<30?.7:.3);
            let d;
            if(a){
              const t=G(e,r);
              e['Trạng thái Tô Văn'][l]=Math.max(t,i-2),
              d=`[Tô Văn chú ý · Ấm áp] Tô Văn chú ý đến sự thay đổi trang phục gần đây của ${o}, nhưng nghĩ theo hướng tốt - trong nhà có thêm chút sức sống là chuyện tốt. Lượt này điểm xuyết nhẹ nhàng cảm giác hưởng ứng không chút phòng bị của anh (một câu cảm thán/một ánh mắt ôn hòa, chi tiết cụ thể phát sinh theo ngữ cảnh), anh không hề phát giác bất kỳ điểm dị thường nào.`
            }else{
              e['Trạng thái Tô Văn'][l]=Math.min(99,i+(i<30?1:2)),
              d=`[Tô Văn chú ý · Nghi ngờ] Ánh mắt của Tô Văn dừng lại trên trang phục của ${o} một lát, nghĩ sâu thêm một tầng. Lượt này điểm xuyết nhẹ nhàng khoảnh khắc này (anh không nói gì, hoặc vờ như tiện miệng hỏi một câu, chi tiết cụ thể phát sinh theo ngữ cảnh), không lật bài ngửa không đối chất.`
            }
            e['Hệ thống']['_Sự kiện đạo cụ chờ gửi']=e['Hệ thống']['_Sự kiện đạo cụ chờ gửi']?`${e['Hệ thống']['_Sự kiện đạo cụ chờ gửi']}|${d}`:d,
            console.info(`[Chú ý trang phục] ${o} kích hoạt (Rủi ro ${u}, p=${Math.round(100*f)}%, ${a?'Hiểu lầm theo hướng tốt':'Sinh nghi'}) Nghi ngờ ${i} -> ${e['Trạng thái Tô Văn'][l]}`)
          }
        }(n,o),

        n['Hệ thống']['_Kết cục xấu']||function(e){
          for(const t of['Tần Lộ','Tô Mộng']){
            const n=e[`Trạng thái ${t}`];
            if(n['_Độ sa đọa kết toán tiền tệ']<0)n['_Độ sa đọa kết toán tiền tệ']=n['Độ sa đọa'];
            else if(n['Độ sa đọa']>n['_Độ sa đọa kết toán tiền tệ']){
              const o=n['Độ sa đọa']-n['_Độ sa đọa kết toán tiền tệ'],r=Math.round(20*o);
              e['Hệ thống']['Tiền tệ']+=r,n['_Độ sa đọa kết toán tiền tệ']=n['Độ sa đọa'],console.info(`[Kinh tế] ${t} Độ sa đọa +${o} -> Tiền tệ +${r} (Tổng cộng ${e['Hệ thống']['Tiền tệ']})`)
            }else n['Độ sa đọa']<n['_Độ sa đọa kết toán tiền tệ']&&(n['_Độ sa đọa kết toán tiền tệ']=n['Độ sa đọa']);

            if(n['_Giai đoạn đã thưởng']<0)n['_Giai đoạn đã thưởng']=n['Giai đoạn hiện tại'];
            else if(n['Giai đoạn hiện tại']>n['_Giai đoạn đã thưởng']){
              let o=0;
              for(let e=n['_Giai đoạn đã thưởng']+1;e<=n['Giai đoạn hiện tại'];e++)o+=Ie[e]??0;
              n['_Giai đoạn đã thưởng']=n['Giai đoạn hiện tại'],o>0&&(e['Hệ thống']['Tiền tệ']+=o,console.info(`[Kinh tế] ${t} Giai đoạn đột phá lên ${n['Giai đoạn hiện tại']} -> Thưởng +${o} (Tổng cộng ${e['Hệ thống']['Tiền tệ']})`))
            }
          }
        }(n),

        L(n)&&U(n),
        _.set(e,'stat_data',n),
        me=!1
      }catch(e){console.error('[Tần Lộ Bản làm lại] VARIABLE_UPDATE_ENDED xử lý thất bại: ',e),me=!1}
    }),

    eventOn(tavern_events.MESSAGE_RECEIVED,async()=>{
      try{
        const e=Me();
        if(!e)return void console.warn('[Tần Lộ Bản làm lại] MESSAGE_RECEIVED: Gần 10 tầng đều không có stat_data, bỏ qua làm mới ảnh chụp nhanh (giữ ảnh chụp nhanh cũ)');
        ye(y.parse(e)),console.info('[Tần Lộ Bản làm lại] MESSAGE_RECEIVED Ảnh chụp nhanh đã được làm mới')
      }catch(e){console.error('[Tần Lộ Bản làm lại] MESSAGE_RECEIVED xử lý thất bại: ',e)}
    }),

    console.info('[Tần Lộ Bản làm lại] Đăng ký lắng nghe sự kiện hoàn tất')
  })()
});
//# sourceMappingURL=index.js.map
