import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GhawatService {

  constructor() { }
  g = [
    {
      id: 1,
      name: 'غزوة ودان',
      when: 2,
      where: 'ودان',
      manyM: 70,
      manyO: 'غير',
      info: `بعد أن أذن الله للمسلمين القتال رأى الرسول مهاجمة قوافل قريش التجارية المتجهة من مكة إلى الشام لعدة أسباب:
      -دفع العدوان الذي وقع على المسلمين والرد على تهديدات قريش المتوالية

      -رد أموال المسلمين المنهوبة قبيل الهجرة

      -إظهار قوات المسلمين

      -إضعاف قريش اقتصاديا`,
      res: `لم يحدث قتال
      -عقد معاهدة حلف مع عمرو بن مخشى الضمري، وكان سيد بني ضمرة في زمانه"`
    },
    {
      id: 2,
      name: 'غزوة بواط',
      when: 2,
      where:  'بواط',
      manyM: 200,
      manyO: 100,
      info: `بعد أن أذن الله للمسلمين القتال رأى الرسول مهاجمة قوافل قريش التجارية المتجهة من مكة إلى الشام لعدة أسباب:
      -دفع العدوان الذي وقع على المسلمين والرد على تهديدات قريش المتوالية

      -رد أموال المسلمين المنهوبة قبيل الهجرة

      -إظهار قوات المسلمين

      -إضعاف قريش اقتصاديا`,
      res: 'لم يحدث قتال'
    },
    {
      id: 3,
      name: 'غزوة بدر الاولي',
      when: 2,
      where:  'وادي سفوان',
      manyM: 70,
      manyO: 'غير',
      info: `أغار المشركين على مراعي المدينة، ونهب بعض المواشي، فخرج رسول الله صلى الله عليه وسلم لمطاردتهم.`,
      res: 'لم يدرك الرسول المشركين، فرجع المسلمون من دون قتال.'
    },
    {
      id: 4,
      name: '	غزوة العشيرة',
      when: 2,
      where:  'العشيرة',
      manyM: 150,
      manyO: 'غير',
      info: `اسباب اول غزوة`,
      res: `لم يدرك الرسول المشركين، فرجع المسلمون من دون قتال
      -عقد رسول الله صلى الله عليه وسلم معاهدة عدم اعتداء مع بني مدلج وحلفائهم من بني ضمرة`
    },
    {
      id: 5,
      name: '	غزوة بدر',
      when: 2,
      where:  'بدر',
      manyM: 313,
      manyO: 1000,
      info: `	هي أول معركة من معارك الإسلام الفاصلة
      عاد المسلمون لمطاردة قافلة قريش التي افلتت منهم في غزوة العشيرة، وعلم أبو سفيان- وهو المسؤول عن القافلة - بقدوم المسلمين فأرسل إلى قريش في مكة مستغيثاً بهم فأرسلت قريش جيشاً لنجدتهم في مقدمتهم أشراف وسادة قريش حتى التقى الجيشان في واد يسمى بدر`,
      res: `انتصر المسلمون ونتج عن المعركة استشهاد 14 من المسلمين ومقتل 70 من المشركين منهم ابي جهل وهو من سادة بني قريش ومن أشد المعادين للنبي محمد بالإضافة إلى أسر 70 مشركاً.
      أما بخصوص الأسرى فقد استقر الرسول على أخذ فداء عن كل أسير بعد الأخذ بمشورة ابي بكر - المشورة قاعدة أساسية في الإسلام ارساها الرسول - وكان الفداء ما بين أربعة آلاف إلى ألف درهم، وكان أهل مكة يكتبون، وأهل المدينة لا يكتبون، فمن لم يكن عنده فداء دفع إليه عشرة غلمان من غلمان المدينة يعلمهم، فإذا تعلموا فهو فداء.`
    },
    {
      id: 6,
      name: '	غزوة بني سليم',
      when: 2,
      where:  '	قرقرة الكدر',
      manyM: 200,
      manyO: 'غير',
      info: `بلغ إلى الرسول أن بني سليم وبني غطفان تحشد قواتها وتنوي الغزو على المدينة فباغتهم النبي في عقر دارهم`,
      res: `لم يحدث قتال، فر بنو سليم تاركين وراءهم خمسمائة بعير غنمها جيش المسلمين `
    },
    {
      id: 7,
      name: '	غزوة بني قينقاع',
      when: 2,
      where:  '	المدينة المنورة',
      manyM: 'غير',
      manyO: 700,
      info: `	 بالرغم من معاهدة السلم بين المسلمين واليهود - كان في داخل المدينة المنورة ثلاث قبائل لليهود: قبيلة بني قينقاع، وقبيلة بني النضير، وقبيلة بني قريظة - عمد يهود بني قينقاع إلى استفزاز المسلمين وإثارة الشغب خاصة بعد نصر المسلمين في غزوة بدر، ورغم وعظ الرسول لهم وتحذيره من مغبة بغيهم إلى أنهم لم يتعظوا وكان اخلالهم بالأمن ومجاهرتهم بالعدوان فتيلاً للحرب      `,
      res: `لم يحدث قتال، سار جيش المسلمين بقيادة الرسول إلى بني قينقاع، ولما رأوه اليهود تحصنوا في حصونهم، فحاصرهم أشد الحصار لمدة 15 يوماً حتى استسلموا.
      أمرهم الرسول أن يخرجوا من المدينة تاركين وراءهم اموالهم واسلحتهم وادوات صياغتهم`

    },
    {
      id: 8,
      name: '	غزوة السويق',
      when: 2,
      where:  '	قرقرة الكدر',
      manyM: 200,
      manyO: 200,
      info: `	خرج أبو سفيان -وهو من قادة قريش- إلى المدينة بعد الهزيمة التي تعرض لها في بدر ليثأر من المسلمين`,
      res: `لم يحدث قتال بين الجيشين، أغار المشركون على منطقة في المدينة تسمى العريض وقتلوا رجلاً واحرقوا النخل ثم فروا قبل قدوم جيش المسلمين`
    },
    {
      id: 9,
      name: '	غزوة ذي أمر',
      when: 3,
      where:  'ذي أمر',
      manyM: 450,
      manyO: 'غير',
      info: `نما إلى علم الرسول أن جمعا كبيرا من بني ثعلبة ومحارب تجمعوا، يريدون الإغارة على أطراف المدينة فخرج الرسول في أربعمائة وخمسين مقاتلا لملاقاتهم`,
      res: `لم يحدث قتال، تفرق المشركون حين سمعوا بقدوم المسلمين ومع ذلك أقام الرسول مع الجيش قرابة شهر ليشعر الأعراب بقوة المسلمين
      من المواقف التي حدثت إسلام دعثور بن الحارث الذي كان سيداً مطاعاً في قومه عندما انفرد بسيفه مع الرسول الذي كان وحيداً يجفف ثيابه تحت الشجرة وعندما حاول قتل الرسول وقع سيفه ثم التقطه الرسول وعفا عنه لشدة رغبته في استئلاف الكفار ليدخلوا في الإسلام. وقد ترك هذا الموقف الكريم أثراً كبيراً في تفكير هؤلاء الأعراب جديًّاً في الدخول في الإسلام وبين لهم أن النبي ليس رجلاً شجاعاً وكريماً وعفواً فحسب، وإنما هو أيضاً نبي مرسل؛ لأنه ليس من عادة الملوك والقادة أن يتركوا من وقف على رؤوسهم بالسيف مهدِّداً بقتلهم دون أن يقتلوه`
    },
    {
      id: 10,
      when: 3,
      name: '	غزوة بحران',
      where:  'بحران',
      manyM: 300,
      manyO: 'غير',
      info: `نما إلى علم الرسول أن جمعاً من بني سليم يستعدون لقتال المسلمين فقرر الرسول مبغاتهم في عقر دارهم   `,
      res: `لم يحدث قتال، رجع المسلمون إلى المدينة دون قتال `
    },
    {
      id: 11,
      when: 3,
      name: '	غزوة أحد',
      where:  'جبل أحد',
      manyM: 250,
      manyO: 3000,
      info: `ارادت قريش الانتقام من المسلمين والثأر منهم لهزيمتهم التي لحقت بهم في بدر، فحشدوا جيشاً كبيراً وتحركوا صوب مكة  `,
      res: `كانت الغلبة للمشركين ونتج عن المعركة استشهاد 70 واصابة 40 بينما قتل 30 مشركاً، ومن أهم جوانب الغزوة:
      -لَمَّا عسكر جيش المشركين قريبًا من أُحد، عقد النبي صلى الله عليه وسلم مجلسًا استشاريًّا عسكريًّا؛ لسماع آراء المسلمين، وكان رأيه صلى الله عليه وسلم ألاَّ يخرجوا من المدينة، وأن يتحصَّنوا بها، ولكنَّ جماعة من فُضلاء الصحابة أشاروا بالخروج للقاء العدو، وكانوا هم الأغلبية، فأخذ الرسول برأي الأغلبية عملاً بقاعدة المشورة على الرغم من مخالفة هذا الرأي لرأيه الشخصي

      -على الرغم من أن دفة القتال جرت لصالح قريش إلا أنهم لم يستطيعوا احتلال معسكر المسلمين ولم يتحصلوا على غنائم أو أسرى ولم يقيموا بساحة القتال يوما أو يومين أو ثلاثة أيام كما هو دأب الفاتحين في ذلك الزمان

      - من الأسباب الرئيسية لهزيمة المسلمين مخالفة الرماة لأوامر الرسول الصارمة بالتمركز على جبل يقع على الضفة الجنوبية من وادي قناة وبعدم مغادرة مكانهم مهما حدث إلا بطلبه لحماية ظهر المسلمين إلا أنهم سرعان ما ترك اغلبهم مكانهم عندما ظهرت بشائر النصر ليشاركوا سواد الجيش في جمع الغنائم فاستغل خالد بن الوليد - وكان لم يسلم بعد - هذه الفرصة واستدار بسرعة حتى وصل إلى مؤخرة الجيش الإسلامي، وانقض على المسلمين من خلفهم الذي أصبح مكشوفاً بعد مغادرة الرماة مكانهم فانقلبت الكفة وانهزم المسلمون

      - لما انصرف أبو سفيان - وهو من قادة قريش - ومن معه نادى المسلمين: إن موعدكم بدر العام القابل. فقال رسول الله صلى الله عليه وسلم لرجل من أصحابه: قل: نعم، هو بيننا وبينك موعد`
    },
    {
      id: 12,
      when: 3,
      name: '	غزوة حمراء الأسد',
      where:  'حمراء الأسد',
      manyM: 300,
      manyO: 'غير',
      info: `هي تكملة لغزوة أحد، كان يخاف الرسول أن يفكر المشركون أنهم لم يستفيدوا شيئا من النصر والغلبة التي كسبوها في معركة أحد لأن المدينة لم تمس وقيادات المسلمين لم تقتل، فخرج من المدينة مع جيشه صباح الغد من معركة أحد حتى بلغوا حمراء الأسد.`,
      res: `لم يحدث قتال بل أسر المسلمون رجلان وقتل أبو عزة الشاعر؛ وكان من أسارى بدر الذين أفرج عنهم الرسول لفقره وكثرة بناته وأخذ عليه عهد ألا يظاهر عليه أحدا ولكنه نكث عهده وحرض الناس بشعره على النبي والمسلمين وخرج لمقاتلتهم في أحد فأمر الرسول بقتله وقال لا يلدغ المؤمن من جحر مرتين `
    },
    {
      id: 13,
      when: 4,
      name: '	غزوة بني النضير',
      where:  'المدينة المنورة',
      manyM: 'غير',
      manyO: 'غير',
      info: `أتت هذه الغزوة بعدما حاول يهود بني النضير اغتيال الرسول عندما جاءهم طالباً مساعدتهم في دية قتيلين - وكان ذلك يجب عليهم حسب بنود المعاهدة- ونتج عن هذه المحاولة ونكث معاهدة السلام أن بعث لهم الرسول يمهلهم شهراً للخروج من المدينة وإلا القتال ولكن رفض اليهود الخروج فحشد الرسول جيش المسلمين وذهب لمحاصرتهم`,
      res: `دام الحصار ست ليال فقط، حتى استسلم اليهود وطلبوا الخروج من المدينة، فوافق الرسول أن يخرجوا مع ترك سلاحهم `
    },
    {
      id: 14,
      when: 4,
      name: 'غزوة نجد',
      where: 'أرض نجد',
      manyM: 'غير',
      manyO: 'غير',
      info: `	نقلت استخبارات المدينة بتحشد جموع البدو والأعراب من بني مُحَارِب وبني ثعلبة من غَطَفَان للحرب على المسلمين، فسارع النبي صلى الله عليه وسلم إلى الخروج حتى يلقي بذور الخوف في أفئدة أولئك البدو القساة؛ الذين آذوا المسلمين بعد أحد، وتواثبوا يقتلون الدعاة الذين ارسلهم الرسول للتعريف بالإسلام في نذالة وكفران، وأرادوا غزو المدينة`,
      res: ` لم يحدث قتال فلما خرج الرسول فروا منه جميعاً وأضحى الأعراب الذين مردوا على النهب والسطو لا يسمعون بمقدم المسلمين إلا حذروا وتمنعوا في رؤوس الجبال. وهكذا أرهب المسلمون هذه القبائل المغيرة وخلطوا بمشاعرهم الرعب، ثم رجعوا إلى المدينة آمنين. `
    },
    {
      id: 15,
      when: 4,
      name: '	غزوة بدر الآخرة',
      where:  'بدر',
      manyM: 1500,
      manyO: 'غير',
      info: `كما سبق ذكره في غزوة أحد فقد توعد أبو سفيان المسلمين ببدر العام المقبل وعلى هذا الأساس تواجه الجيشان مجدداً`,
      res: `لم يحدث قتال بعد أن قرر أبو سفيان الرجوع لمكة وأما المسلمون فأقاموا ببدر ثمانية أيام ينتظرون العدو، وباعوا ما معهم من التجارة فربحوا بدرهم درهمين، ثم رجعوا إلى المدينة وتوطدت هيبتهم في النفوس`
    },
    {
      id: 16,
        when: 5,
        name: '	غزوة الجندل',
        where:  'دومة الجندل',
        manyM: 1000,
        manyO: 'غير',
        info: `جاءت الأخبار إلى الرسول محمد بأن القبائل حول دومة الجندل تقطع الطريق هناك، وتنهب ما يمر بها، وأنها قد حشدت جمعا كبيرا تريد أن تهاجم المدينة، فقرر الرسول الخروج إليهم. `,
        res: `لم يحدث قتال، فقد فر أهل دومة الجندل لما علموا بقدم المسلمين`
    },
    {
      id: 17,
      when: 5,
      name: '	غزوة الخندق (غزوة الأحزاب)	',
      where:  '	المدينة المنورة ',
      manyM: 3000,
      manyO: 10000,
      info: `بعد أن طرد المسلمين يهود بني النضير - بسبب نقضهم عهدهم مع الرسولِ محمدٍ ومحاولة قتله - فكر اليهود بالانتقام من المسلمين، ومن أجل ذلك خرج سادات بني النضير لتحريض القبائل العربية على غزو المدينة المنورة، فاستجابت لهم قريش وحلفاؤها، لاحقاً انضم إليهم يهودُ بني قريظة على الرغم من العهد ولميثاق الذي كان يربطهم بالمسلمين -وانضمامهم كان تمهيداً لغزوة بني قريظة-.`,
      res: `عندما وصل للمسلمين أخبار زحف الأحزاب إليهم عقد الرسول مجلس استشاري لبحث خطة الدفاع عن المدينة وتم فيه الأخذ برأي الصحابي سلمان الفارسي الذي اقترح فيه حفر خندق حول المدينة يحول دون اختراقها.
      فوجئ المشركون بالخندق خاصة أن هذه الحيلة لم تكن تعرفها العرب قبل ذلك ولجأوا إلى فرض حصار على المدينة وحاولوا مراراً اختراق الخندق دون جدوى ولم يجر قتال مباشر.

      قام يهود بني قريظة - كانوا يعيشون في جنوب المدينة مع المسلمين وكان يربطهم معاهدة سلام وحرية عبادة ودفاع مشترك - بمخالفة العهد والتحالف مع المشركين، وكان الموقف شديد الخطورة على المسلمين فأمامهم جيش يفوقهم عدداً وخلفهم عدو نقض عهده وبدأ المنافقون منهم في الهروب من الجيش.

      فكر الرسول في فك تحالف الأحزاب بأن يعرض ثلث ثمار المدينة على قبيلة غطفان في مقابل انسحابهم إلا أنه عدل عن رأيه بعد استشارة سعد بن معاذ وسعد بن عبادة الذين فضلوا عدم الرضوخ

      جاء نعيم بن مسعود - وهو رجل من قادة قبيلة غطفان - إلى الرسول معلناً اسلامه ولم يعلم قومه بعد، فطلب منه الرسول ان يساعد على قدر استطاعته فإن الحرب خدعة. وكان لهذا الرجل دور محوري في إنهاء المعركة بأن عمد إلى بث الفرقة بين المشركين واليهود وإقناع كل طرف أن الطرف الأخر سيخذله وكان له ما أراد. وفي هذه الأثناء ثارت رياح شديدة عند مواقع المشركين لم تترك لهم خيمة إلا واقتلعتها، ولم تترك نارًا إلا أطفأتها، ووصلت شدة الريح وخطورتها إلى الدرجة التي دفعتهم لأخذ قرار العودة دون قتال وفك الحصار وانتهت الحرب.`
    },
    {
      id: 18,
      when: 5,
      name: '	غزوة 	غزوة بني قريظة',
      where:  'المدينة المنورة ',
      manyM: 3000,
      manyO: '700',
      info: 'تعد غزوة بني قريظة امتداد لغزوة الأحزاب، فبعد انسحاب المشركين من حدود المدينة التي أرادوا اقتحامها بمساعدة يهود بني قريظة -على الرغم من معاهدة السلام التي تربطهم مع جيرانهم المسلمين - أراد المسلمون التعامل مع يهود بني قريظة لنقضهم عهدهم وجعلهم المسلمين عرضة للهلاك فحشدوا الجيش.',
      res: `تحرك الجيش الإسلامي نحو بني قريظة وفرضوا عليهم الحصار، وفي النهاية استسلموا وخضعوا للمسلمين.
      كان حكم على يهود بني قريظة بأن يقتل رجالهم، وتسبى نساؤهم، وتقسم الأموال، وكان فعلهم بمثابة الخيانة العظمى بلغة العصر.`
    },
    {
      id: 19,
      when: 6,
      name: '	غزوة بني لحيان',
      where:  '	غران ',
      manyM: 200,
      manyO: 'غير',
      info: `	بنو لحيان هم الذين كانوا قد قتلوا عشرة من الدعاة كانوا في طريقهم إلى قوم من عَضَل وقَارَة - في السنة الرابعة من الهجرة قدم على رسول الله قوم من عَضَل وقَارَة ذكروا أن فيهم إسلاماً، وسألوا أن يبعث معهم من يعلمهم الدين، ويقرئهم القرآن فأرسل إليهم الرسول بعشرة من أصحابه -.
      ولما كانت ديار بنو لحيان متوغلة في الحجاز إلى حدود مكة لم يرد الرسول ان يتوغل بمقربة من قريش آنذاك، ولكن لما تخاذلت الأحزاب واستوهنت عزائمهم في السنة السادسة من الهجرة رأي أن الوقت قد آن لأن يأخذ من بني لحيان ثأر أصحابه المقتولين بالرجيع فخرج إليهم في مائتين من أصحابه.`,
      res: `لم يحدث قتال، فلما سمعت بنو لحيان بقدوم المسلمين هربوا في رؤوس الجبال`
    },
    {
      id: 20,
      when: 6,
      name: '	غزوة بني المصطلق',
      where:  'المريسيع	 ',
      manyM: 'غير',
      manyO: 'غير',
      info: '	سمع الرسول باستعداد قبيلة بني المصطلق لغزو المدينة فبعث بأحد الصحابة ليؤكد الخبر، ولما تيقن الرسول جمع جيشه وتوجه إليهم.',
      res: `انتصر المسلمون بعد قتال قصير - فر الكثير من المشركين لما علموا بقدم المسلمين - وسبى المسلمون النساء والذراري والنعم والشاء.
      وعلى الرغم من أنها غزوة صغيرة لم يكن فيها قتالاً كبيراً إلا أنها اشتملت على بعض الأحداث والازمات الكبيرة يقف وراءها المنافقين وعلى رأسهم عبد الله بن أبي:

      -حدث صراع بين نفر من المهاجرين ونفر من النصر على السقاية من بئر من آبار المنطقة وتطور الأمر بعض أن استغاث كل بعشيرته واستغل المنافقون الموقف وقال كبيرهم {لئن رجعنا إلى المدينة ليخرجن الأعز منها الأذل} لإشعال الموقف إلا أن تدخل الرسول أعد الأمور إلا نصابها.

      -في هذه الغزوة كانت حادثة الإفك التي اتهم فيها المنافقون السيدة عائشة بنت أبي بكر زوجة النبي بالزنا وكذب الله ادعائهم لاحقاً في القرآن.`
    },
    {
      id: 21,
      when: 6,
      name: '	صلح الحديبية ',
      where: 'الحديبية ',
      manyM: 1400,
      manyO: 'غير',
      info: `رأى الرسول في المنام - وهو بالمدينة - أنه دخل هو وأصحابه المسجد الحرام، وأخذ مفتاح الكعبة، وطافوا واعتمروا فأخبر بذلك أصحابه ففرحوا وأخبر أصحابه أنه معتمر فتجهزوا للسفر، ولم تكن هناك نية قتال بل شد رحال إلى مكة بغرض الاعتمار ولم تكن هناك أي نية للقتال.
      أراد رسول الله صلى الله عليه وسلم أن يبعث سفيراً يؤكد لدي قريش موقفه وهدفه من هذا السفر، فأرسل عثمان بن عفان وقال له: أخبرهم أنا لم نأت لقتال، وإنما جئنا عماراً، وادعهم إلى الإسلام. وقد تأخر رجوع عثمان - ولعل السبب هو استغراق قريش في الرد - فشاع بين المسلمين أن عثمان قتل ولكنه عاد سالما في النهاية. ثم بعثت قريش سُهَيْل بن عمرو لعقد الصلح، تحدث كثيراً مع المسلمين وفي النهاية اتفق الطرفان على الصلح`,
      res: `بنود الصلح:
      1. يرجع المسلمون ولا يدخلوا مكة هذا العام، على أن يدخلوا مكة معتمرين في العام المقبل آمِنِينَ.

      2. وضع الحرب بين الطرفين عشر سنين، يأمن فيها الناس، ويكف بعضهم عن بعض.

      3. من أحب أن يدخل في عهد محمد دخل فيه، ومن أحب أن يدخل في عهد قريش دخل فيه، وتعتبر القبيلة التي تنضم إلى أي الفريقين جزءاً من ذلك الفريق، فأي عدوان تتعرض له أي من هذه القبائل يعتبر عدواناً على ذلك الفريق.

      4. من أتي محمداً من قريش من غير إذن وليه ـ أي هارباً منهم ـ رده عليهم، ومن جاء قريشاً ممن مع محمد ـ أي هارباً منه ـ لم يرد عليه.

      ويعد صلح الحديبية انتصار معنوي كبير للمسلمين، فباتت قريش التي كانت دوماً تسعى للقضاء على الإسلام وإبادة المسلمين تجنح إلى الصلح مما يمثل اعتراف بقوة المسلمين. وعلى الرغم من هذا الفوز المعنوي إلا أن الحزن قد امتلك الكثير من المسلمين الذين كانوا يمنون النفس بالاعتمار في هذه السنة وزادهم حزنا الرضوخ لبنود الصلح وهم على حق، ولعل أعظمهم حزناً كان عمر بن الخطاب الذي أبدى حزنه شديد للرسول حتى أقرائه {إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا...} إلخ [سورة الفتح:1] عندما نزلت الآية فطابت نفسه.`,
    },
    {
      id: 22,
      when: 6,
      name: '	غزوة ذي قرد',
      where:  'ذو قرد',
      manyM: 40,
      manyO: '500',
      info: `أغار جمع من قبيلة غطفان على إبل النبي صلى الله عليه وسلم في منطقة يقال لها الغابة على حدود المدينة وقتلوا حارسها وخطفوا زوجته مع الإبل.
      علم أهل المدينة بما حدث فانطلق الرسول مع بضع فرسان لمطاردة المعتدين.`,
      res: `استطاع المسلمين تخليص المرأة وبعض الإبل، استشهد اثنان من المسلمين وقتل اثنان من المشركين وهرب الباقون ببعض الإبل.`
    },
    {
      id: 23,
      when: 7,
      name: '	غزوة خيبر ووادي القُري ',
      where:  'خيبر ',
      manyM: 1400,
      manyO: '10000',
      info: `خيبر هي المدينة التي نزح إليها يهود بني النضير بعدما أجلاهم الرسول من المدينة عقب نكثهم معاهدة السلام ومحاولة اغتياله، وعلى الرغم من أن المسلمون تركوهم دون قتال عقب محاصرتهم - غزوة بني النضير- إلا أن اليهود أبوا أن يتركوا المسلمين في سلام.
      كانت خيبر وكرًا للتآمر، فأهل خيبر هم الذين حزبوا الأحزاب ضد المسلمين، وأثاروا بني قريظة على الغدر والخيانة، ثم أخذوا في الاتصالات بالمنافقين وبغطفان وأعراب البادية ـ الجناح الثالث من الأحزاب ـ وكانوا هم أنفسهم يتهيأون للقتال، فألقوا المسلمين بإجراءاتهم هذه في محن متواصلة.

      فلما اطمأن رسول الله صلى الله عليه وسلم من أقوي أجنحة الأحزاب الثلاثة، وهو قريش، وأمن منه تماماً بعد صلح الحديبية أراد أن يحاسب الجناحين الباقيين ـ اليهود وقبائل نجد ـ حتى يتم الأمن والسلام، ويسود الهدوء في المنطقة، ويفرغ المسلمون من الصراع الدامي المتواصل إلى تبليغ رسالة الله والدعوة إليه.

      فكانت غزوة خيبر هي الأخرى نتيجة ورد فعل على هجوم الأحزاب`,
      res: `كانت خيبر مؤمنة بثمانية حصون كبيرة بالإضافة إلى بعض القلاع والحصون الأخرى ولكنها لا تبلغ إلى درجة هذه القلاع الثمانية في مناعتها وقوتها.
      تهيأ المسلمون للقتال والبدء بالهجوم على أول حصن، وأعطر الرسول الراية لعلي بن أبي طالب وأوصاه بدعوة اليهود إلى الإسلام قبل مداهمتهم وقتالهم قائلاً له: (انفذ على رسلك، حتى تنزل بساحتهم، ثم ادعهم إلى الإسلام، وأخبرهم بما يجب عليهم من حق الله فيه، فوالله، لأن يهدي الله بك رجلا واحدًا خير لك من أن يكون لك حمر النعم)

      بدأ المسلمون بفتح حصن تلو الآخر وتخلل ذلك أياماً من الحصار وقتال ومقاومة شديدة من اليهود حتى لجأ اليهود إلى الاستسلام والمفاوضة. وأما عن بنود الصلح، فقد طلب اليهود من الرسول أن تحقن دماءهم وأن يتركوا أموالهم فكان لهم ذلك، ثم سألوه أن يبقيهم على زراعة أرض خيبر مقابل نصف ما يخرج من ثمارها فأعطاهم ذلك، وتبع استسلام أهل خيبر يهود فَدَك ووادي القُرَي وأخيراً يهود تيماء.

      وكان من جملة السبي صفية بنت حيي بنت أخطب - وكان أبوها سيد بني النضير وأحد زعماء اليهود وزوجها كنانة الذي قتل يوم خيبر- وخيَّرها الرسول بين الإسلام والبقاء على دينها قائلاً لها: «اختاري، فإن اخترت الإسلام أمسكتك لنفسي -أي: تزوَّجتك-، وإن اخترت اليهودية فعسى أن أعتقك فتلحقي بقومك» فاختارت الإسلام فأعتقها وتزوَّجها. ولعل هدف الرسول من هذا الزواج إعزاز صفية وإكرامها إلى جانب إيجاد رابطة المصاهرة بينه وبين اليهود لعله يخفِّف عداءهم، ويرقق قلوبهم للإسلام.

      استشهد من المسلمين في معارك خيبر ما بين 16 و91 رجلاً، أما قتلي اليهود فعددهم 93 قتيلاً`
    },
    {
      id: 24,
      when: 5,
        name: '	غزوة ذات الرقاع',
        where:  'نجد ',
        manyM: '400-700',
        manyO: 'غير',
        info: `لما فرغ رسول الله صلى الله عليه وسلم من كسر جناحين قويين من أجنحة الأحزاب الثلاثة تفرغ للالتفات إلى الجناح الثالث والأخير وهم الأعراب الضاربين في فيافي نجد، والذين كانوا مستمرين في أعمال النهب والسلب بين آونة وأخري. ولما كان هؤلاء البدو لا تجمعهم بلدة أو مدينة، كانت الصعوبة في فرض السيطرة عليهم وإخماد نار شرهم تمامًا تزداد؛ ولذلك لم تكن تجدي فيهم إلا حملات التأديب من حين إلى آخر مثلما حدث في غزوة نجد.
        وفي هذا السياق نما إلى علم الرسول باجتماع هؤلاء الأعراب - بني أنمار أو بني ثعلبة وبني مُحَارِب من غطفان - للإغارة على المسلمين، فبادر هو بالخروج إليهم.`,
        res: `لم يحدث قتال، لقي المسلمون جمعاً من غطفان فأخاف بعضهم بعضاً - وصلى النبي بالمسلمين صلاة الخوف حينئذ - ولما علمت قبائل غطفان بقدوم المسلمين هربت، وعاد المسلمون منتصرين
        كان لهذه الغزوة أثر في قذف الرعب في قلوب هؤلاء الأعراب القساة من قبائل غطفان، فقد كانت سبباً في استكانتهم شيئاً فشيئاً حتى استسلموا، بل وأسلموا لاحقاً. وبهذا تم كسر الأجنحة الثلاثة التي كانت ممثلة في الأحزاب، وساد المنطقة الأمن والسلام، مما مهد لاحقاً لفتوح البلدان والممالك الكبيرة.`
    },
    {
      id: 25,
      when: 8,
      name: '	سرية مؤتة',
      where:  ' مؤتة',
      manyM: 3000,
      manyO: '20000',
      info: `معركة مؤتة كانت من أكبر المعارك التي خاضها المسلمون في حياة الرسول، وهي مقدمة وتمهيد لفتوح بلدان النصارى. و على الرغم من أنها لم تكن غزوة بالمعنى المقصود - فالغزوة هي ما خرج فيها الرسول للقتال وقاد المسلمين بنفسه أما السرية فهي المعركة التي حدثت في عهد الرسول وقادها أحد الصحابة دون تواجد الرسول - إلا أن ذهب البعض بتسميتها بـ "غزوة"؛ ولعل ذلك بسبب اشراف الرسول المباشر عليها أو عظم شأنها.
      وسبب هذه المعركة أن الرسول محمد بعث الحارث بن عمير إلى ملك بصرى - بصرى هي مدينة تاريخية كانت تتبع للدولة الرومانية آنذاك و تقع في سوريا حالياً - يدعوه إلى الإسلام، فقتل على يد ملك بصرى شرحبيل بن عمرو الغساني.

      وكان قتل السفراء والرسل من أشنع الجرائم بل ويعد بمثابة إعلان حالة الحرب، فدعا الرسول الناس للخروج ومقاتلة الروم وجهز إليهم جيشاً قوامه ثلاثة آلاف مقاتل وأوصاهم أن يأتوا مقتل الحارث بن عمير، وأن يدعوا مَنْ هناك إلى الإسلام، فإن أجابوا وإلا استعانوا بالله عليهم، وقاتلوهم، وقال لهم: (اغزوا بسم الله، في سبيل الله، مَنْ كفر بالله، لا تغدروا، ولا تغلوا، ولا تقتلوا وليداً ولا امرأة، ولا كبيراً فانياً، ولا منعزلاً بصومعة، ولا تقطعوا نخلاً ولا شجرة، ولا تهدموا بناء)`,
      res: `التقي الفريقان في مؤتة، بدأ القتال الشديد وصمد المسلمون أمام الأعداد الكبيرة من الروم وقتل ثلاث من قادة المسلمين إلى أن تسلم الإمرة خالد بن الوليد الذي استطاع بحنكة حربية الصمود أمام الروم ثم الانسحاب بعد إرهابهم وإيهامهم بوصول إمدادات جديدة.
      أما عن الأحداث، فقد صمد المسلمون أمام جيش الرومان طول النهار في أول يوم من القتال بقيادة خالد الذي استغلّ الظلام ليغيّر مراكز المقاتلين، وحوَّل الميسرة ميمنة، والميمنة ميسرة ، والمؤخرة مقدمة والعكس ، وطلب من خيّالة المسلمين اصطناع غبارٍ وجلبة قويّة ، فظن الروم في اليوم الثاني أن المسلمين جاءهم مدد ، فخارت عزائمهم ولم يتبعوا المسلمون عندما كانوا يتأخرون رويداً رويداً حتى تم الانسحاب.

      واستشهد في هذه المعركة من المسلمين اثنا عشر رجلاً، أما الرومان، فلم يعرف عدد قتلاهم والغالب هو الكثرة. وهذه المعركة وإن لم يحصل المسلمون بها على الثأر الذي ذهبوا إليه، لكنها كانت كبيرة الأثر لسمعة المسلمين الذين صمدوا أمام أكبر وأعظم قوة على وجه الأرض حينئذ مع قلة عددهم ـ ثلاثة آلاف أمام مائتا ألف مقاتل ـ ورجعوا إلى المدينة من غير أن تلحق بهم خسارة تذكر.`
    },
    {
      id: 26,
      when: 8,
      name: 'فتح مكة',
      where:  'مكة ',
      manyM: 10000,
      manyO: 'غير',
      info: `	نقضت قريش معاهدة الحديبية بأن أعانت قبيلة بنو بكر- التي دخلت في عهد قريش - على الإغارة على قبيلة خزاعة – التي دخلت في عهد رسول - فأصابوا منهم رجالاً, وتناوشوا واقتتلوا.
      وسرعان ما أحست قريش بخطئها وغدرها, فبعثت قائدها أبا سفيان ليجدد الصلح, لكنه لم يفلح ورفض الرسول الحديث معه , فعاد أدراجه إلى مكة .

      وإمام هذا النقض للمصالحة أمر الرسول بتجهز الجيش في سرية تامة وانطلق إلى مكة. وقسم الرسول جيشه إلى ثلاثة أقسام: قسم أمّر عليه خالد بن الوليد وأمره أن يدخل مكة من أسفلها، وقسم أمّر عليه الزبير بن العوام وأمره أن يدخل مكة من أعلاها، وقسم أمّر عليه أبا عبيدة بن الجراح وأمره أن يسلك بطن الوادي. ووجّه الرسول أمراءَ الجيش الثلاثة بأن يكفوا أيديهم ولا يقاتلوا إلا من قاتلهم وأعطى الأمان لمن لازم بيته أو المسجد الحرام.`,
      res: `دخل الجيش الإسلامي مكة ولم يواجه جيشا محاربا من أهلها باستثناء اشتباك محدود وقع بين جيش خالد بن الوليد ومجموعة قليلة من قريش بقيادة عكرمة بن أبي جهل رفضت الأمان وأرادت التصدي للمسلمين بالقوة، وقتل في هذا الاشتباك أفراد قلائل من الجانبين، ثم انتهى بفرار فلول مجموعة قريش إلى بيوتهم ليأمنوا من القتل.

      دخل الرسول مكة من أعلاها وسار إلى المسجد الحرام، فأقبل إلى الحجر الأسود فاستلمه ثم طاف بالبيت، وكانت في يده قوس يطعن بها الأصنام المنصوبة حول الكعبة (360 صنما) وهو يردد قوله تعالى Ra bracket.png وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا Aya-81.png La bracket.png،Ra bracket.png قُلْ جَاءَ الْحَقُّ وَمَا يُبْدِئُ الْبَاطِلُ وَمَا يُعِيدُ Aya-49.png La bracket.png، فتخر الأصنام ساقطة على وجوهها. فلما أكمل طوافه دعا سادن الكعبة عثمان بن طلحة فأخذ منه مفتاحها وأمر بها ففتحت، فدخلها وأمر بالصور التي كانت فيها فمحيت، ثم دار في نواحيها وصلى داخلها.

      تجمعت رجالات قريش منتظرين ما سيفعله بهم الرسول، فتوجه إليهم وقال: "يا معشر قريش، ما ترون أني فاعل بكم؟"، فقالوا: أخ كريم وابن أخ كريم، قال: "فإني أقول لكم كما قال يوسف لإخوانه: Ra bracket.png قَالَ لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ يَغْفِرُ اللَّهُ لَكُمْ وَهُوَ أَرْحَمُ الرَّاحِمِينَ Aya-92.png La bracket.png، اذهبوا فأنتم الطلقاء"، وأمر بلالا أن يصعد فيؤذن للصلاة على ظهر الكعبة وقريش تسمع.

      وفي اليوم التالي لفتحه مكة ألقى النبي محمد صلى الله عليه وسلم خطبة عظيمة بين فيها بعض معالم الدين وحرمة بلده الأمين مكة، ثم بايع الرجال والنساء من أهل مكة على السمع والطاعة، وأقام بها بعد ذلك 19 يوما وضح لهم فيها معالم الإسلام وتعاليمه ورتب فيها الشؤون الإدارة للمدينة.

      وكان فتح مكة هو أعظم فتح حصل عليه المسلمون في هذه الأعوام، وكان حدثاً محورياً باتت فيه الغلبة والقوة للمسلمين بعدما كان ينظر لهم أنهم تابعين لقريش.`
    },
    {
      id: 27,
      when: 8,
      name: '	غزوة حنين ',
      where:  '	وادي حنين ',
      manyM: 12000,
      manyO: 25000,
      info: `جاء الإسلام وقبيلة هوازن في أوج قوتها، ولم تعجبهم الانتصارات المتتالية للمسلمين. وبعد فتح مكة شعرت هوازن بمزيد من الخطورة فقرر قائدهم مالك بن عوف المسير إلى حرب المسلمين.
      حينما سمع الرسول بقدوم قبيلة هوازن قرر الخروج بالجيش خارج مكة في واد يسمى وادي حُنَيْن لملاقاتهم. وخرج معه اثني عشر ألفاً من المسلمين؛ عشرة آلاف ممن كانوا خرجوا معه لفتح مكة، وألفان من أهل مكة. وأكثرهم حديثو عهد بالإسلام، ونظر البعض إلى كثرة الجيش قائلاً لن نُغْلَبَ اليوم، وكان قد شق ذلك على الرسول وحزن حزناً شديداً إزاء هذه الثقة الزائدة.`,
      res: `وصل مالك بن عوف بجيشه إلى وادي حُنَيْن قبل المسلمين، وبالتالي نشر قواته في الأماكن المناسبة، واحتل المواقع الاستراتيجية، واستراحت جيوشه بصورة كافية قبل اللقاء، وكل ذلك كان في صالح المشركين. ولما وصل جيش المسلمين، اندفع إلى سهل حُنَيْن دون تروٍّ، فانهالت عليه الأسهم والرماح من كل مكان، وأحيط بالمسلمين من كل مكان، فخارت عزائمهم في لحظات وفر اغلبهم إلا قليل ثبت مع الرسول في قلب المعركة.
      وأمر رسول اللّه صلى الله عليه وسلم عمه العباس أن ينادي الصحابة ثم الأنصار ثم قصرت الدعوة في بني الحارث بن الخزرج، وعادت كتائب المسلمين رويداً رويداً، وتجالد الفريقان مجالدة شديدة وانقلبت الآية وتحقق النصر للمسلمين.

      وحقق المسلمون مغانم كثيرة في هذه المعركة خاصة أن وقبيلة هوازن خرجت بالنساء والأطفال والأنعام والأموال، وكل ممتلكاتهم تحفيزًا للجيش على القتال، أمر رسول اللّه صلى الله عليه وسلم بجمع الغنائم بمنطقة تسمى بالجِعْرَانَة، ولم يقسمها حتى فرغ من غزوة الطائف.

      وأما عن القتلى، فاستشهد خمسة من المسلمين وقتل سبعين فردًا من المشركين، ولعل قلة أعداد القتلى جاءت لعدم ضراوة القتال، فكانت المعركة فرّ وكرّ من المسلمين، ثم كر وفر من المشركين.`
    },
    {
      id: 28,
      when: 8,
      name: '	غزوة الطائف ',
      where:  'الطائف ',
      manyM: '12000',
      manyO: 'غير',
      info: `تعد غزوة الطائف امتداد لغزوة حنين، وذلك أن معظم فلول هَوَازن دخلوا الطائف مع قائدهم مالك بن عوف وتحصنوا بها، فسار إليهم رسول الله صلى الله عليه وسلم بعد فراغه من حنين وجمع الغنائم.`,
      res: `لما وصل المسلمون إلى الطائف، أمر الرسول بفرض الحصار على أهل الطائف المتحصنين في حصانهم المنيعة. ودام الحصار قرابة الشهر حاول فيه المسلمون اقتحام الحصن بطرق شتى - صناعة منجنيق لقذف الحصون بالحجارة، وصنع دبابةً خشبية يختبئ تحتها الجنود؛ ليصلوا إلى القلاع والحصون دون أن تصيبهم السهام - دون جدوى، وعلى إثر ذلك استشار الرسول أحد الصحابة ونصحه بفك الحصار وقد كان.
      وبعد فك الحصار عاد الرسول ومكث في وادي الجعرانة يقسم غنائم غزوة حنين، وبعد توزيع الغنائم أقبل وفد قبيلة هوازن ليعلن إسلامه وطلب برد السبي، فنقل الرسول هذا الطلب إلى المسلمين وحثهم على قبوله حتى تم.`},
    {
      id: 29,
      when: 9,
      name: '	غزوة تبوك',
      where:  'تبوك',
      manyM: 30000,
      manyO: 40000,
      info: `قرر الرومان إنهاء القوة الإسلامية التي أخذت تهدد الكيان الروماني المسيطر على المنطقة؛ فلم يكن قيصر ليصرف نظره عما كان لمعركة مؤتة من الأثر الكبير لصالح المسلمين وكان يري القضاء على قوة المسلمين قبل أن تقوى أكثر وتثير القلاقل والثورات في المناطق العربية الخاضعة للرومان آنذاك.
      وعلى إثر ذلك، خرجت جيوش الروم العرمرمية بقوى رومانية وعربية تقدر بأربعين ألف مقاتل. كان الرسول يري أنه لو تواني وتكاسل عن غزو الرومان في هذه الظروف، وتركهم يزحفوا خلال المناطق التي كانت تحت سيطرة الإسلام لكان له أسوأ أثر على الدعوة الإسلامية وعلى سمعة المسلمين العسكرية، ولذلك قرر القيام ـ رغم صعوبة الموقف ـ بغزوة فاصلة يخوضها المسلمون ضد الرومان في حدودهم، ولا يمهلونهم حتى يزحفوا إلى دار الإسلام.`,
      res: `طلب الرسول من الصحابة أن يتجهزوا للقتال وبعث إلى القبائل من العرب وإلى أهل مكة يستنفرهم، وتسابق المسلمون في الامتثال لأمر الرسول من التجهز للقتال وبذل الأموال والصداقات.
      تحرك الرسول إلى تبوك في جيش قوامه ثلاثون ألف مقاتل - هو الأكبر على الإطلاق بالنسبة للمسلمين - وعسكر هناك انتظارا للرومان.

      انتهت المعركة بلا صدام أو قتال لأن الجيش الروماني تشتت وتبدد في البلاد خوفًا من المواجهة لما سمع بزحف المسلمين؛ مما رسم تغيرات عسكرية في المنطقة، جعلت حلفاء الروم يتخلون عنها ويحالفون العرب كقوة أولى في المنطقة.`
    },

  ];
}
