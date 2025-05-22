
import type { Contact } from '@/types';

export const contacts: Contact[] = [
  {
    id: '1',
    name: {
      en: 'Alice Wonderland',
      vi: 'Alice ở Xứ Sở Thần Tiên',
    },
    phoneNumber: '555-0101',
    shortDescription: {
      en: 'Curious adventurer, tea party enthusiast.',
      vi: 'Nhà thám hiểm tò mò, người đam mê tiệc trà.',
    },
    fullDescription: {
      en: 'Alice is known for her adventures in Wonderland. She enjoys exploring, attending tea parties, and playing croquet with flamingos. She is a loyal friend and always up for a challenge.',
      vi: 'Alice nổi tiếng với những cuộc phiêu lưu ở Xứ Sở Thần Tiên. Cô thích khám phá, tham dự các bữa tiệc trà và chơi croquet với hồng hạc. Cô là một người bạn trung thành và luôn sẵn sàng đối mặt với thử thách.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman portrait',
    category: {
      en: 'Friends',
      vi: 'Bạn Bè',
    },
    email: 'alice@wonderland.com',
  },
  {
    id: '2',
    name: {
      en: 'Bob The Builder',
      vi: 'Bob Thợ Xây',
    },
    phoneNumber: '555-0102',
    shortDescription: {
      en: 'Can he fix it? Yes, he can!',
      vi: 'Anh ấy sửa được không? Được chứ!',
    },
    fullDescription: {
      en: 'Bob is a general contractor and head of his own construction yard in Bobsville. He is assisted by Wendy and a host of anthropomorphic vehicles. He is always ready to help with any building project.',
      vi: 'Bob là một nhà thầu général và là chủ của sân xây dựng riêng ở Bobsville. Anh được Wendy và một đội xe hình người hỗ trợ. Anh luôn sẵn sàng giúp đỡ mọi dự án xây dựng.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man construction',
    category: {
      en: 'Work',
      vi: 'Công Việc',
    },
    email: 'bob@builder.com',
  },
  {
    id: '3',
    name: {
      en: 'Charlie Brown',
      vi: 'Charlie Brown',
    },
    phoneNumber: '555-0103',
    shortDescription: {
      en: 'Good grief! Lovable loser.',
      vi: 'Trời ơi! Kẻ thất bại đáng yêu.',
    },
    fullDescription: {
      en: 'Charlie Brown is a kind-hearted and often melancholic character. He is the owner of Snoopy and navigates the ups and downs of childhood with his group of friends. He never gives up, despite his frequent misfortunes.',
      vi: 'Charlie Brown là một nhân vật tốt bụng và thường u sầu. Cậu là chủ của Snoopy và trải qua những thăng trầm của tuổi thơ cùng nhóm bạn. Cậu không bao giờ bỏ cuộc, dù thường xuyên gặp xui xẻo.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'boy cartoon',
    category: {
      en: 'Friends',
      vi: 'Bạn Bè',
    },
  },
  {
    id: '4',
    name: {
      en: 'Diana Prince',
      vi: 'Diana Prince',
    },
    phoneNumber: '555-0104',
    shortDescription: {
      en: 'Amazonian princess, warrior for peace.',
      vi: 'Công chúa Amazon, chiến binh vì hòa bình.',
    },
    fullDescription: {
      en: 'Diana, also known as Wonder Woman, is a founding member of the Justice League. She possesses superhuman strength, agility, and the Lasso of Truth. She fights for justice and equality.',
      vi: 'Diana, còn được biết đến là Wonder Woman, là một thành viên sáng lập của Justice League. Cô sở hữu sức mạnh siêu phàm, sự nhanh nhẹn và Thòng Lọng Sự Thật. Cô chiến đấu vì công lý và bình đẳng.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman superhero',
    category: {
      en: 'Heroes',
      vi: 'Anh Hùng',
    },
    email: 'diana@themisyra.net',
  },
  {
    id: '5',
    name: {
      en: 'Edward Scissorhands',
      vi: 'Edward Tay Kéo',
    },
    phoneNumber: '555-0105',
    shortDescription: {
      en: 'Gentle soul with an unusual talent.',
      vi: 'Tâm hồn hiền lành với tài năng khác thường.',
    },
    fullDescription: {
      en: 'Edward is an artificial man with scissors for hands. Despite his intimidating appearance, he is kind and artistic, excelling at hairstyling and ice sculpting. He longs for acceptance and love.',
      vi: 'Edward là một người nhân tạo với đôi tay là kéo. Dù vẻ ngoài đáng sợ, anh ấy tốt bụng và có năng khiếu nghệ thuật, xuất sắc trong việc tạo mẫu tóc và điêu khắc băng. Anh khao khát sự chấp nhận và tình yêu.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man gothic',
    category: {
      en: 'Acquaintances',
      vi: 'Người Quen',
    },
  },
  {
    id: '6',
    name: {
      en: 'Fiona Gallagher',
      vi: 'Fiona Gallagher',
    },
    phoneNumber: '555-0106',
    shortDescription: {
      en: 'Matriarch of the Gallagher family.',
      vi: 'Trụ cột của gia đình Gallagher.',
    },
    fullDescription: {
      en: 'Fiona is the resilient and resourceful eldest sibling of the Gallagher clan. She often puts her family\'s needs before her own, juggling multiple jobs and responsibilities to keep them afloat.',
      vi: 'Fiona là người chị cả kiên cường và tháo vát của gia tộc Gallagher. Cô thường đặt nhu cầu của gia đình lên trên bản thân, xoay xở nhiều công việc và trách nhiệm để giữ cho gia đình tồn tại.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman urban',
    category: {
      en: 'Family',
      vi: 'Gia Đình',
    },
    email: 'fiona@gallagher.com',
  },
   {
    id: '7',
    name: {
      en: 'Dr. Gregory House',
      vi: 'Bác sĩ Gregory House',
    },
    phoneNumber: '555-0107',
    shortDescription: {
      en: 'Brilliant, misanthropic diagnostician.',
      vi: 'Nhà chẩn đoán xuất sắc, ghét người.',
    },
    fullDescription: {
      en: 'Dr. House is a medical genius known for solving complex cases that baffle other doctors. His unconventional methods and abrasive personality often put him at odds with colleagues and patients.',
      vi: 'Bác sĩ House là một thiên tài y học nổi tiếng với việc giải quyết các ca bệnh phức tạp khiến các bác sĩ khác phải bó tay. Phương pháp độc đáo và tính cách khó chịu của ông thường khiến ông mâu thuẫn với đồng nghiệp và bệnh nhân.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man doctor',
    category: {
      en: 'Work',
      vi: 'Công Việc',
    },
  },
  {
    id: '8',
    name: {
      en: 'Hermione Granger',
      vi: 'Hermione Granger',
    },
    phoneNumber: '555-0108',
    shortDescription: {
      en: 'Brightest witch of her age.',
      vi: 'Phù thủy thông minh nhất tuổi của cô ấy.',
    },
    fullDescription: {
      en: 'Hermione is a highly intelligent and resourceful witch, one of Harry Potter\'s closest friends. She is known for her academic prowess, bravery, and strong moral compass.',
      vi: 'Hermione là một phù thủy cực kỳ thông minh và tháo vát, một trong những người bạn thân nhất của Harry Potter. Cô nổi tiếng với năng lực học tập, lòng dũng cảm và la bàn đạo đức mạnh mẽ.',
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'girl magic',
    category: {
      en: 'Friends',
      vi: 'Bạn Bè',
    },
    email: 'hermione@hogwarts.ac.uk',
  }
];
