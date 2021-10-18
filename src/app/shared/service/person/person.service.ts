import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
p = [
  {
    name: `الإمام الشافعي`,
    info: `أحد أئمة أهل السنة، وهو محمد بن إدريس الشافعي المطلبي القرشي، ويكنى بأبي عبد الله، أسس المذهب الشافعي وعلم أصول الفقه، كما أنه الإمام الأول في علم الحديث والتفسير، فتمكن بفضل ما تقّدم من إحداث تغيير ملموس في التاريخ؛ فانتمى إليه الكثير من المسلمين وخاصةً في بلاد الشام، ومصر والسودان واليمن وتهامة والعراق وبلاد فارس وغيرها الكثير من الأماكن حول العالم، وبذلك فقد أصبح من أعظم شخصيات التاريخ الإسلامي.`
  },
  {
    name: `القرطبي`,
    info: `يستحق المفسر الكبير محمد بن أحمد بن أبي بكر بن فرج الأنصاري أن يكون ضمن قائمة أعظم شخصيات التاريخ الإسلامي، فقد قدّم العديد من المؤلفات والمساهمات التي شهد لها العالم بقوة تأثيرها ومكانتها المرموقة، ومن أهمها: الجامع لأحكام القرآن المشهور باسم تفسير القرطبي، كتاب التذكار في أفضل الأذكار، التذكرة بأحوال الموتى وأحوال الآخرة.`
  }, {
    name: `الإمام البخاري`,
    info: `يعد الإمام البخاري واحدًا من أعظم شخصيات التاريخ الإسلامي، حيث يعتبر من كبار علماء الجرح والتعديل والعلل وعلوم الرجال والحديث وغيرها، ويحظى بمكانةٍ مرموقة عند أهل السنة، وقد وضع بين يدّي المسلمين كتابًا اعتُبِرَ الأوثق بعد كتاب الله -عز وجل- والسنة النبوية الشريفة، ويذكر بأنه قد استغرق 16 عامًا في جمع كتابه هذا وتصنيفه، ونظرًا لمكانة الإمام البخاري فقد أُطلق عليه لقب أمير المؤمنين في الحديث.`
  }, {
    name: `صلاح الدين الأيوبي`,
    info: `سطر الملك الناصر صلاح الدين الأيوبي في التاريخ أروع الأمثلة؛ فكان واحدًا من بين أعظم شخصيات التاريخ الإسلامي التي ضحّت عرفتها البشرية، فيعود له الفضل في قيام الدولة الأيوبية، والأهم من ذلك بأنه قاهر الصليبييّن ومحرر القدس منهم، ومن المؤكد فقد اقترن ذكر معركة حطين باسمه باعتباره بطلها الهُمام.`
  }, {
    name: `هارون الرشيد`,
    info: `الخليفة العباسي الخامس، المُلقّب بأبي جعفر، من أكثر خلفاء الدولة العباسية شهرة، وعُرف بأنه الخليفة الذي أدى 100 ركعة في كل يومٍ من أيام حياته، وكان مقدسًّا للعلماء، ويشار إلى أنه من أقام بيت الحكمة في بغداد، وأقدم على إجراء الإصلاحات الداخلية بشكلٍ كبير، وبفضل إنجازاته العظيمة التي يصُعب حصرها فقد دخل التاريخ من أوسع أبوابه ليكون من أعظم شخصيات التاريخ الإسلامي.
    `
  }, {
    name: `عمر المختار`,
    info: `قد تعجز السطور عن الوصف وتقف الكلمات حائرة أمام شيخ المجاهدين وأسد الصحراء عمر المختار، من أكبر المقاومين والمجاهدين العرب والمسلمين على الإطلاق، فكان اهم نقاط قوة الليبييّن المقاومين، فهو الأيقونة الجهادية لكل من عربّي عزم على الجهاد.`
  }, {
    name: `ابن اسحاق الكندي`,
    info: `تمكن عالمنا الفلكي والكيميائي والرياضي والطبيب والفيلسوف ابن الكندي أن يكون واحدًا منهم، فأسهم في الكثير من الإنجازات التي أخذت بيد الرياضيات نحو التطوّر، ومن اهمها:

    إدخال الأرقام الهندية إلى العالمين الإسلامي والمسيحي.
    واضع مقياس فاعلية الدواء.
    الريادة في تحليل الشفرات.
    تناول المسائل الفلسفية الدينية كثيرًا.
    تأليف كتاب رسالة في قدر منفعة صناعة الطب.
    واضع نظام الإعتماد على أطوار القمر، الذي يتيح للطبيب الأيام الحرجة بالنسبة للمريض.
    تأليف كتاب في إبطال دعوى من يدعي صنعة الذهب والفضة.
    تأسيس صناعة العطور.`
  },
  {
    name: `عمر بن عبد العزيز`,
    info: `أبو حفص عمر بن عبد العزيز بن مروان بن الحكم الأموي القرشي ، هو ثامن الخلفاء الأمويين، عمر الثاني. ولد سنة 61هـ في المدينة المنورة، ونشأ فيها عند أخواله من آل عمر بن الخطاب، فتأثر بهم وبمجتمع الصحابة في المدينة، وكان شديد الإقبال على طلب العلم. وفي سنة 87هـ، ولّاه الخليفة الوليد بن عبد الملك على إمارة المدينة المنورة، ثم ضم إليه ولاية الطائف سنة 91هـ، فصار واليًا على الحجاز كلها، ثم عُزل عنها وانتقل إلى دمشق. فلما تولى سليمان بن عبد الملك الخلافة قرّبه وجعله وزيرًا ومستشارًا له، ثم جعله ولي عهده، فلما مات سليمان سنة 99هـ تولى عمر الخلافة.
تميزت خلافة عمر بن عبد العزيز بعدد من المميزات، منها: العدلُ والمساواة، وردُّ المظالم التي كان أسلافه من بني أمية قد ارتكبوها، وعزلُ جميع الولاة الظالمين ومعاقبتُهم، كما أعاد العمل بالشورى، ولذلك عدّه كثير من العلماء خامس الخلفاء الراشدين، كما اهتم بالعلوم الشرعية، وأمر بتدوين الحديث النبوي الشريف. استمرت خلافة عمر سنتين وخمسة أشهر وأربعة أيام، حتى قُتل مسمومًا سنة 101هـ، فتولى يزيد بن عبد الملك الخلافة من بعده.`
  },
   {
    name: `سيف الدين قطز`,
    info: `هو ثالث الملوك الأتراك المماليك على مصر والشام ، وقد بدأ حياته مملوكا لعز الدين أيبك التركماني ، ثم تدرج في عساكر دولة المنصور حتى خلعه ، وتربع على العرش مكانه ، ثم هب لقتال التتار بعدما استولوا على بغداد ، ودمشق وهددوا بالاستيلاء على مصر ، ولكنه قاتلهم في عين جالوت بفلسطين ، وطاردهم حتى بيسان ، ودخل دمشق ، ولكنه قتل في طريق عودته للقاهرة على يد بيبرس ورجاله .`
  }, {
    name: ` العز بن عبد السلام`,
    info: `هو عبد العزيز بن عبد السلام بن أبي القاسم بن الحسن السلمي الدمشقي الملقب بسلطان العلماء ، وهو فقيه ومجاهد شافعي نشأ في دمشق ، تولى الخطابة والتدريس بزاوية الغزالي ، ثم بالجامع الأموي ، سافر بعدها إلى مصر حيث ولاه الصالح نجم الدين أيوب القضاء والخطابة والنهي والأمر حتى اعتزل الناس في بيته حتى مرض وتوفي بالقاهرة ، من مؤلفاته التفسير الكبير ، قواعد الأحكام في اصلاح الأنام ، ترغيب أهل الإسلام في سكن الشام .`
  }, {
    name: `الظاهر بيبرس`,
    info: `هو العلائي البندقداري الصالحي ، وهو الملك الظاهر الذي اشتهر بفتوحاته وشجاعته ، أسر في صغره وبيع حيث انتقل إلى حلب ثم إلى القاهرة حتى قبض عليه الملك الصالح في ظل حكم الملك قطز ثم اعتقه ، خرج في قتال التتار بفلسطين واتفق مع أمراء الجيش على قتل قطز ثم تولى حكم مصر والشام حينها ، صاحب فتوحات تاريخية عظيمة مثل بلاد النوبة ، دنقلة ، توفي في دمشق حيث أٌقيمت المكتبة الظاهرية حول مدفنه .`
  }, {
    name: `الإمام أبو حنيفة`,
    info: `هو الإمام الفقيه المحدث أبو حنيفة النعمان بن ثابت التيمي، إمام أصحاب الرأي، وفقيه أهل العراق، وأعلم أهل عصره بالحديث، وصاحب المذهب الحنفي وإمام الحنفية، وأحد الأئمَّة الأربعة عند أهل السنة.

    قيل: أصله من أبناء فارس، وُلِد بـ الكوفة عام (80هـ= 699م) في خلافة عبد الملك بن مروان ونشأ بها، وكان يعمل بالتجارة ويطلب العلم في صباه، ثم انقطع للتدريس والإفتاء، وامتنع ورعًا أن يتولَّى القضاء أكثر من مرَّة، ويُعدُّ أبو حنيفة رحمه الله من التابعين؛ حيث لقي بعض الصحابة وروى عنهم الكثير.

    كان أبو حنيفة رحمه الله عاملًا زاهدًا عابدًا ورعًا تقيًّا كثير الخشوع دائم التضرُّع إلى الله تعالى، وكان ثقةً قويَّ الحُجَّة، ذكيًّا فطنًا سريع البديهة، حسن المنطق والصورة، كريمًا في أخلاقه، جوادًا، جهوريَّ الصوت.

    وقد تُوفِّي في بغداد سنة (150هـ= 767م) وله سبعون سنة، وأخباره ومناقبه كثيرة، وعلمه غزير، ومن مصنَّفاته: (مسند في الحديث، وكتاب العلم والتعلم، وكتاب الرد على القدرية، وكتاب الفقه الأكبر، وغيرها..).

    وقد اشتهر مذهبه في الكوفة، وبغداد، ومصر، والشام، وتونس، والجزائر، واليمن، والهند، وفارس، والصين، وبخارى، وسمرقند، وبلاد الأفغان والقوقاز، والتركستان الشرقية والغربية .
     `
  }, {
    name: `الإمام مالك`,
    info: `هو شيخ الإسلام، وحجَّة الأمَّة، وإمام دار الهجرة، أبو عبد الله، مالك بن أنس بن مالك بن أبي عامر بن عمرو بن الحارث الأصبحي، وأمُّه عالية بنت شريك الأزدية.

    هو أحد الأئمَّة الأربعة عند أهل السنة، ومؤسِّس المذهب المالكي وإليه تُنسب المالكية، وُلِد في المدينة على الأرجح عام (93ه= 712م)، ونشأ في طلب العلم، فكان من سادات أتباع التابعين وجلَّة الفقهاء والصالحين، وممَّن كثرت عنايته بالسنن وجمعه لها.

    يُعتبر مالك رحمه الله إمام أهل الحجاز في عصره وإليه ينتهي فقه المدينة، وقد أجمع العلماء على أمانته ودينه وورعه، وشهد له جميع الأئمَّة بالفضل حتى قالوا: «لا يُفتى ومالك في المدينة».

    فكان حقًّا صلبًا في دينه، عظيم الجلالة كثير الوقار، ورعًا ثقةً ثبتًا حُجَّةً فقيهًا عالمـًا، روى عن غير واحدٍ من التابعين، وحدَّث عنه خلقٌ كثير، ومناقبه وأخباره كثيرةٌ جدًّا، وقد مات رحمه الله في المدينة سنة (179هـ= 795م)، وله من العمر خمس وثمانون سنة.

    ترك الإمام مالك الكثير من المؤلَّفات منها: (كتاب الموطأ الذي ظلَّ يُحرِّره أربعين عامًا وجمع فيه عشرة آلاف حديث، و-أيضًا- كتاب تفسير غريب القرآن، وكتاب في المسائل، ورسالة في الوعظ، ورسالة في الردِّ على القدرية، وكتاب في النجوم).

    وقد ذاع صيت مذهبه في جميع الأقطار، فرحل الناس إليه من كلِّ مكان، وظلَّ يعلم ويفتي قرابة سبعين عامًا، وانتشر مذهبه في مصر، والمغرب الأقصى، والجزائر، وتونس، وطرابلس، وهو الغالب في السودان وبعض دول إفريقيا، والأندلس، والبصرة، والكويت، وقطر، والبحرين .`
  },
  {
    name: `الإمام أحمد ابن حنبل`,
    info: `هو الإمام البارع، شيخ الإسلام وسيِّد المسلمين، المجمع على جلالته وإمامته وورعه وزهادته وحفظه ووفور علمه وسيادته، أبو عبد الله أحمد بن محمد بن حنبل بن هلال بن أسد الشيباني.

    إمام المذهب الحنبلي وأحد الأئمَّة الأربعة، وإمام المحدِّثين الناصر للدين، والمناضل عن السنة، والصابر في المحنة، وهو، وُلِد في بغداد سنة (164هـ= 780م) ونشأ بها، وطلب العلم وسمع الحديث من شيوخها، وحفظ القرآن، وتعلَّم اللغة، ثم بدأ في رحلات طلب العلم، فذهب إلى الكوفة، والبصرة، ومكة، والمدينة، واليمن، والشام، والجزيرة، وكتب عن علماء ذلك العصر.

    كان الإمام أحمد مجتهدًا وبرز على أقرانه في حفظ السنة وجمع شتاتها حتى أصبح إمام المحدِّثين في عصره، وكان قوي العزيمة صبورًا ثابت الرأي قوي الحجة، جريئًا في التكلم عند الخلفاء ممَّا كان سببًا له في محنته المشهورة؛ حيث اقتنع الخليفة العباسي المأمون بقول المعتزلة بخلق القرآن، ولكنَّه مات قبل أن يُناظر الإمام أحمد رحمه الله، ولمـَّا تولَّى المعتصم بعده سجن ابن حنبل رحمه الله لامتناعه عن القول بخلق القرآن، وأطلق صراحه بعد ثمانية وعشرين شهرًا.

    وتوقف الأذى عن الإمام في زمن الواثق بالله الذي تولَّى بعد المعتصم، وبعد أن تُوفِّي الواثق وتولى الخليفة المتوكل أبطل بدعة خلق القرآن وكرَّم أحمد ابن حنبل وبَسَط له يد العون، وظلَّ ابن حنبل على منهاجه ثابتًا على رأيه حتى تُوفِّي ببغداد سنة (241هـ= 855م) وله سبعٌ وسبعون سنة.

    وللإمام أحمد رحمه الله تصانيف كثيرة، أشهرها المسند الذي يحتوي على ثلاثين ألف حديث، وقيل: نيِّفًا وأربعين ألف، وله كتب في التاريخ والتفسير وفضائل الصحابة والمناسك والزهد، وجمع تلاميذه من بعده مسائل كثيرة في الفقه والفتوى ودوَّنوها ونقلوها بعضهم عن بعض في مجاميع كبيرة، ومن هؤلاء التلاميذ: (محمد بن إسماعيل البخاري صاحب الصحيح، ومسلم بن الحجاج النيسابوري صاحب الصحيح، وأبو داود صاحب السنن، وولداه صالح وعبد الله`
  },
  {
    name: `الامام الترمذي`,
    info: `هو الإمام أبو عيسى محمد بن عيسى بن سَورة الترمذي ، المولود سنة (209هـ) ، والمتوفى سنة (279هـ)، يعدّ الإمام الترمذي من خواص تلامذة البخاري، شهد له العلماء بالعلم والحفظ والإتقان والنقد والمعرفة والمعرفة لعللّ الأحاديث وبالديانة والعبادة والورع والزهد، حتى إنّه لغلبة الخوف والخشية عليه كفّ بصره وضرّ في آخر عمره من كثرة بكائه من خشية الله تعالى، قال الحافظ أبو سعيد الإدريسي عن الترمذي: "أحد الأئمة الذين يقتدى بهم في علم الحديث، صنف الجامع والتواريخ والعلل تصنيف رجل عالم متقن، كان يضرب به المثل في الحفظ`
  },
  {
    name: `الامام مسلم`,
    info: `هو أبو الحسين مسلم بن الحجاج بن مسلم بن ورد بن كوشاذ القشيري النيسابوري، من أبرز علماء الحديث عند أهل السنة والجماعة. ولد في نيسابور حوالي عام 206 هـ، ونشأ في بيت علم وفضل حيث كان أبوه الحجاج من المشيخة. أقبل الإمام مسلم منذ صغره على سماع الحديث وحفظه، وكان أول سماع له عام 218 هـ وعمره آنذاك اثنتا عشرة سنة. أخذ العلم أولاً عن شيوخ بلاده وسمع الكثير من مروياتهم، وكانت له رحلة واسعة في طلب الحديث طاف خلالها البلاد الإسلامية عدة مرات، فرحل إلى الحجاز لأداء فريضة الحج والسماع من أئمة الحديث وكبار الشيوخ، وزار المدينة النبوية ومكة المكرمة ورحل إلى العراق فدخل البصرة وبغداد والكوفة ورحل إلى الشام ومصر والري. فمكث قرابة الخمسة عشرة عامًا في طلب الحديث، لقي فيها عددًا كبيرًا من الشيوخ، وجمع ما يزيد على ثلاثمائة ألف حديث. أثنى عليه علماء عصره ومن بعدهم، واعترفوا له بإمامته وبالتقدم والإتقان في علم الحديث، ومن أقوال العلماء فيه:
    صاحب كتاب صحيح مسلم
    صحيح مسلم هو أحد أهم كتب الحديث النبوي عند المسلمين من أهل السنة والجماعة، ويعتبرونه ثالث أصحّ الكتب على الإطلاق بعد القرآن الكريم ثمّ صحيح البخاري. ويعتبر كتاب صحيح مسلم أحد كتب الجوامع وهي ما تحتوي على جميع أبواب الحديث من عقائد وأحكام وآداب وتفسير وتاريخ ومناقب ورقاق وغيرها.

جمعه أبو الحسين مسلم بن الحجاج القشيري النيسابوري، وتوخّى فيه ألا يروي إلا الأحاديث الصحيحة التي أجمع عليها العلماء والمحدّثون، فاقتصر على رواية الأحاديث المرفوعة وتجنّب رواية المعلّقات والموقوفات وأقوال العلماء وآرائهم الفقهية، إلا ما ندر، أخذ في جمعه وتصنيفه قرابة خمس عشرة سنة، وجمع فيه أكثر من ثلاثة آلاف حديث بغير المكرر، وانتقاها من ثلاثمائة ألف حديث من محفوظاته.
    `
  },
];
}