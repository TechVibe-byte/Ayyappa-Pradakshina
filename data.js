// Data for Sai Baba Pradakshina
const saiBabaMantraText = "<div class='sai-mantra-border'><span class='sai-line-1'>Om Sai Namo Namah</span> <br> <span class='sai-line-2'>Shri Sai Namo Namah</span> <br> <span class='sai-line-3'>Jai Jai Sai Namo Namah</span> <br> <span class='sai-line-4'>Sadguru Sai Namo Namah</span></div>";
const saiBabaMantra = Array(108).fill(saiBabaMantraText);

const saiBabaMantraTextTelugu = "<div class='sai-mantra-border'><span class='sai-line-1'>ఓం సాయై నమో నమః</span> <br> <span class='sai-line-2'>శ్రీ సాయి నమో నమః</span> <br> <span class='sai-line-3'>జై జై సాయి నమో నమః</span> <br> <span class='sai-line-4'>సద్గురు సాయి నమో నమః</span></div>";
const saiBabaMantraTelugu = Array(108).fill(saiBabaMantraTextTelugu);

// Data for Hanuman Pradakshina
const hanumanMantraText = "<div class='sai-mantra-border'><span class='sai-line-1'>Anjaneyam Mahaviram</span> <br> <span class='sai-line-2'>Brahma Vishnu Shivatmakam</span> <br> <span class='sai-line-3'>Tarunarka Prabham Shantam</span> <br> <span class='sai-line-4'>Anjaneyam Namamyaham</span></div>";
const hanumanMantra = Array(108).fill(hanumanMantraText);

const hanumanMantraTextTelugu = "<div class='sai-mantra-border'><span class='sai-line-1'>ఆంజనేయం మహావీరం</span> <br> <span class='sai-line-2'>బ్రహ్మ విష్ణు శివాత్మకం</span> <br> <span class='sai-line-3'>తరుణార్క ప్రభం శాంతం</span> <br> <span class='sai-line-4'>ఆంజనేయం నమామ్యహమ్</span></div>";
const hanumanMantraTelugu = Array(108).fill(hanumanMantraTextTelugu);

// Data for Sarana Ghosha and Naama Japam
const saranaGhosha = [
    "ōṃ śrī svāminē śaraṇamayyappa",
    "om hari hara sutanē śaraṇamayyappa",
    "om āpadbhāndavanē śaraṇamayyappa",
    "om anādharakṣakanē śaraṇamayyappa",
    "om akhilāṇḍa kōṭi brahmāṇḍanāyakanē śaraṇamayyappa",
    "om annadāna prabhuvē śaraṇamayyappa",
    "om ayyappanē śaraṇamayyappa",
    "om ariyāṅgāvu ayyāvē śaraṇamayyappa",
    "om ārchan kōvil aranē śaraṇamayyappa",
    "om kuḻattapulai bālakanē śaraṇamayyappa",
    "om erumēli śāstanē śaraṇamayyappa",
    "om [vāvarusvāminē śaraṇamayyappa]",
    "om kannimūla mahā gaṇapatiyē śaraṇamayyappa",
    "om nāgarājavē śaraṇamayyappa",
    "om mālikāpuratta dulōkadēvi śaraṇamayyappa mātāyē",
    "om kuruppa svāmiyē śaraṇamayyappa",
    "om sēvippa varkānanda mūrtiyē śaraṇamayyappa",
    "om kāśivāsiyē śaraṇamayyappa",
    "om haridvāra nivāsiyē śaraṇamayyappa",
    "om śrīraṅgapaṭṭaṇa vāsiyē śaraṇamayyappa",
    "om karuppatūr vāsiyē śaraṇamayyappa",
    "om gollapūḍi [dvārapūḍi] dharmaśāstāvē śaraṇamayyappa",
    "om sadguru nādhanē śaraṇamayyappa",
    "om viḻāli vīranē śaraṇamayyappa",
    "om vīramaṇikaṇṭanē śaraṇamayyappa",
    "om dharmaśāstravē śaraṇamayyappa",
    "om śaraṇugōṣapriyavē śaraṇamayyappa",
    "om kāntimalai vāsanē śaraṇamayyappa",
    "om ponnambalavāsiyē śaraṇamayyappa",
    "om pandaḻaśiśuvē śaraṇamayyappa",
    "om vāvarin tōḻanē śaraṇamayyappa",
    "om mōhinīsutavē śaraṇamayyappa",
    "om kankaṇḍa daivamē śaraṇamayyappa",
    "om kaliyugavaradanē śaraṇamayyappa",
    "om sarvarōga nivāraṇa dhanvantara mūrtiyē śaraṇamayyappa",
    "om mahiṣimardananē śaraṇamayyappa",
    "om pūrṇa puṣkaḻa nādhanē śaraṇamayyappa",
    "om van-puli vāhananē śaraṇamayyappa",
    "om baktavatsalanē śaraṇamayyappa",
    "om bhūlōkanādhanē śaraṇamayyappa",
    "om ayindumalaivāsavē śaraṇamayyappa",
    "om śabari girīśanē śaraṇamayyappa",
    "om irumuḍi priyanē śaraṇamayyappa",
    "om abhiṣēkapriyanē śaraṇamayyappa",
    "om vēdappōruḻīnē śaraṇamayyappa",
    "om nitya brahmachāriṇē śaraṇamayyappa",
    "om sarva maṅgaḻadāyakanē śaraṇamayyappa",
    "om vīrādhivīranē śaraṇamayyappa",
    "om ōṅkārappōruḻē śaraṇamayyappa",
    "om ānandarūpanē śaraṇamayyappa",
    "om bhakta chittādivāsanē śaraṇamayyappa",
    "om āśrita-vatsalanē śaraṇamayyappa",
    "om bhūta gaṇādipatayē śaraṇamayyappa",
    "om śakti-rūpanē śaraṇamayyappa",
    "om śāntamūrtayē śaraṇamayyappa",
    "om padunēlbābaḍikki adhipatiyē śaraṇamayyappa",
    "om uttam apuruṣānē śaraṇamayyappa",
    "om ṛṣikula rakṣakunē śaraṇamayyappa",
    "om vēdapriyanē śaraṇamayyappa",
    "om uttarānakṣatra jātakanē śaraṇamayyappa",
    "om tapōdhananē śaraṇamayyappa",
    "om yaṅgaḻa kuladaivamē śaraṇamayyappa",
    "om jaganmōhanē śaraṇamayyappa",
    "om mōhanarūpanē śaraṇamayyappa",
    "om mādhavasutanē śaraṇamayyappa",
    "om yadukulavīranē śaraṇamayyappa",
    "om māmalai vāsanē śaraṇamayyappa",
    "om ṣaṇmukha-sōdaranē śaraṇamayyappa",
    "om vēdāntarūpanē śaraṇamayyappa",
    "om śaṅkara sutanē śaraṇamayyappa",
    "om śatrusaṃhārinē śaraṇamayyappa",
    "om sadguṇamūrtayē śaraṇamayyappa",
    "om parāśaktiyē śaraṇamayyappa",
    "om parātparanē śaraṇamayyappa",
    "om parañjyōtiyē śaraṇamayyappa",
    "om hōmapriyanē śaraṇamayyappa",
    "om gaṇapati sōdaranē śaraṇamayyappa",
    "om dharma śāstrāvē śaraṇamayyappa",
    "om viṣṇusutanē śaraṇamayyappa",
    "om sakala-kaḻā vallabhanē śaraṇamayyappa",
    "om lōka rakṣakanē śaraṇamayyappa",
    "om amita-guṇākaranē śaraṇamayyappa",
    "om alaṅkāra priyanē śaraṇamayyappa",
    "om kannimārai-kappavanē śaraṇamayyappa",
    "om bhuvanēśvaranē śaraṇamayyappa",
    "om mātāpitā gurudaivamē śaraṇamayyappa",
    "om svāmiyin puṅgāvanamē śaraṇamayyappa",
    "om aḻudānadiyē śaraṇamayyappa",
    "om aḻudāmēḍē śaraṇamayyappa",
    "om kaḻliḍraṅkuṇḍrē śaraṇamayyappa",
    "om karimalai yēṭramē śaraṇamayyappa",
    "om karimalai yērakkamē śaraṇamayyappa",
    "om pēriyān vaṭṭamē śaraṇamayyappa",
    "om cheriyāna vaṭṭamē śaraṇamayyappa",
    "om pambānadiyē śaraṇamayyappa",
    "om pambayiḻ vīḻḻakkē śaraṇamayyappa",
    "om nīlimalai yēṭramē śaraṇamayyappa",
    "om appāchi mēḍē śaraṇamayyappa",
    "om śabaripīṭamē śaraṇamayyappa",
    "om śaraṃ gutti ālē śaraṇamayyappa",
    "om bhasmakuḻamē śaraṇamayyappa",
    "om padunēṭṭāṃ baḍiyē śaraṇamayyappa",
    "om neyyībhi ṣēkapriyanē śaraṇamayyappa",
    "om karpūra jyōtiyē śaraṇamayyappa",
    "om jyōtisvarūpanē śaraṇamayyappa",
    "om makara jyōtiyē śaraṇamayyappa",
    "om pandala rājakumāranē śaraṇamayyappa",
    "ōṃ harihara sutanē ānandachittan ayyappa svāminē śaraṇamayyappa"
];

const saranaGhoshaTelugu = [
    "ఓం శ్రీ స్వామినే శరణమయ్యప్ప",
    "ఓం హరి హర సుతనే శరణమయ్యప్ప",
    "ఓం ఆపద్భాందవనే శరణమయ్యప్ప",
    "ఓం అనాధరక్షకనే శరణమయ్యప్ప",
    "ఓం అఖిలాండ కోటి బ్రహ్మాండనాయకనే శరణమయ్యప్ప",
    "ఓం అన్నదాన ప్రభువే శరణమయ్యప్ప",
    "ఓం అయ్యప్పనే శరణమయ్యప్ప",
    "ఓం అరియాంగావు అయ్యావే శరణమయ్యప్ప",
    "ఓం ఆర్చన్ కోవిల్ అరనే శరణమయ్యప్ప",
    "ఓం కుళత్తపులై బాలకనే శరణమయ్యప్ప",
    "ఓం ఎరుమేలి శాస్తనే శరణమయ్యప్ప",
    "ఓం [వావరుస్వామినే శరణమయ్యప్ప]",
    "ఓం కన్నిమూల మహా గణపతియే శరణమయ్యప్ప",
    "ఓం నాగరాజవే శరణమయ్యప్ప",
    "ఓం మాలికాపురత్త దులోకదేవి శరణమయ్యప్ప మాతాయే",
    "ఓం కురుప్ప స్వామియే శరణమయ్యప్ప",
    "ఓం సేవిప్ప వర్కానంద మూర్తియే శరణమయ్యప్ప",
    "ఓం కాశివాసియే శరణమయ్యప్ప",
    "ఓం హరిద్వార నివాసియే శరణమయ్యప్ప",
    "ఓం శ్రీరంగపట్టణ వాసియే శరణమయ్యప్ప",
    "ఓం కరుప్పతూర్ వాసియే శరణమయ్యప్ప",
    "ఓం గొల్లపూడి [ద్వారపూడి] ధర్మశాస్తావే శరణమయ్యప్ప",
    "ఓం సద్గురు నాధనే శరణమయ్యప్ప",
    "ఓం విళాలి వీరనే శరణమయ్యప్ప",
    "ఓం వీరమణికంటనే శరణమయ్యప్ప",
    "ఓం ధర్మశాస్త్రవే శరణమయ్యప్ప",
    "ఓం శరణుగోషప్రియవే శరణమయ్యప్ప",
    "ఓం కాంతిమలై వాసనే శరణమయ్యప్ప",
    "ఓం పొన్నంబలవాసియే శరణమయ్యప్ప",
    "ఓం పందళశిశువే శరణమయ్యప్ప",
    "ఓం వావరిన్ తోళనే శరణమయ్యప్ప",
    "ఓం మోహినీసుతవే శరణమయ్యప్ప",
    "ఓం కన్కండ దైవమే శరణమయ్యప్ప",
    "ఓం కలియుగవరదనే శరణమయ్యప్ప",
    "ఓం సర్వరోగ నివారణ ధన్వంతర మూర్తియే శరణమయ్యప్ప",
    "ఓం మహిషిమర్దననే శరణమయ్యప్ప",
    "ఓం పూర్ణ పుష్కళ నాధనే శరణమయ్యప్ప",
    "ఓం వన్-పులి వాహననే శరణమయ్యప్ప",
    "ఓం బక్తవత్సలనే శరణమయ్యప్ప",
    "ఓం భూలోకనాధనే శరణమయ్యప్ప",
    "ఓం అయిందుమలైవాసవే శరణమయ్యప్ప",
    "ఓం శబరి గిరీశనే శరణమయ్యప్ప",
    "ఓం ఇరుముడి ప్రియనే శరణమయ్యప్ప",
    "ఓం అభిషేకప్రియనే శరణమయ్యప్ప",
    "ఓం వేదప్పోరుళీనే శరణమయ్యప్ప",
    "ఓం నిత్య బ్రహ్మచారిణే శరణమయ్యప్ప",
    "ఓం సర్వ మంగళదాయకనే శరణమయ్యప్ప",
    "ఓం వీరాధివీరనే శరణమయ్యప్ప",
    "ఓం ఓంకారప్పోరుళే శరణమయ్యప్ప",
    "ఓం ఆనందరూపనే శరణమయ్యప్ప",
    "ఓం భక్త చిత్తాదివాసనే శరణమయ్యప్ప",
    "ఓం ఆశ్రిత-వత్సలనే శరణమయ్యప్ప",
    "ఓం భూత గణాదిపతయే శరణమయ్యప్ప",
    "ఓం శక్తి-రూపనే శరణమయ్యప్ప",
    "ఓం శాంతమూర్తయే శరణమయ్యప్ప",
    "ఓం పదునేల్బాబడిక్కి అధిపతియే శరణమయ్యప్ప",
    "ఓం ఉత్తమపురుషానే శరణమయ్యప్ప",
    "ఓం ఋషికుల రక్షకునే శరణమయ్యప్ప",
    "ఓం వేదప్రియనే శరణమయ్యప్ప",
    "ఓం ఉత్తరానక్షత్ర జాతకనే శరణమయ్యప్ప",
    "ఓం తపోధననే శరణమయ్యప్ప",
    "ఓం యంగళ కులదైవమే శరణమయ్యప్ప",
    "ఓం జగన్మోహనే శరణమయ్యప్ప",
    "ఓం మోహనరూపనే శరణమయ్యప్ప",
    "ఓం మాధవసుతనే శరణమయ్యప్ప",
    "ఓం యదుకులవీరనే శరణమయ్యప్ప",
    "ఓం మామలై వాసనే శరణమయ్యప్ప",
    "ఓం షణ్ముఖ-సోదరనే శరణమయ్యప్ప",
    "ఓం వేదాంతరూపనే శరణమయ్యప్ప",
    "ఓం శంకర సుతనే శరణమయ్యప్ప",
    "ఓం శత్రుసంహారినే శరణమయ్యప్ప",
    "ఓం సద్గుణమూర్తయే శరణమయ్యప్ప",
    "ఓం పరాశక్తియే శరణమయ్యప్ప",
    "ఓం పరాత్పరనే శరణమయ్యప్ప",
    "ఓం పరంజ్యోతియే శరణమయ్యప్ప",
    "ఓం హోమప్రియనే శరణమయ్యప్ప",
    "ఓం గణపతి సోదరనే శరణమయ్యప్ప",
    "ఓం ధర్మ శాస్త్రావే శరణమయ్యప్ప",
    "ఓం విష్ణుసుతనే శరణమయ్యప్ప",
    "ఓం సకల-కళా వల్లభనే శరణమయ్యప్ప",
    "ఓం లోక రక్షకనే శరణమయ్యప్ప",
    "ఓం అమిత-గుణాకరనే శరణమయ్యప్ప",
    "ఓం అలంకార ప్రియనే శరణమయ్యప్ప",
    "ఓం కన్నిమారై-కప్పవనే శరణమయ్యప్ప",
    "ఓం భువనేశ్వరనే శరణమయ్యప్ప",
    "ఓం మాతాపితా గురుదైవమే శరణమయ్యప్ప",
    "ఓం స్వామియిన్ పుంగావనమే శరణమయ్యప్ప",
    "ఓం అళుదానదియే శరణమయ్యప్ప",
    "ఓం అళుదామేడే శరణమయ్యప్ప",
    "ఓం కళ్లిడ్రంకుండ్రే శరణమయ్యప్ప",
    "ఓం కరిమలై యేట్రమే శరణమయ్యప్ప",
    "ఓం కరిమలై యేరక్కమే శరణమయ్యప్ప",
    "ఓం పేరియాన్ వట్టమే శరణమయ్యప్ప",
    "ఓం చెరియాన వట్టమే శరణమయ్యప్ప",
    "ఓం పంబానదియే శరణమయ్యప్ప",
    "ఓం పంబయిళ్ వీళ్ళక్కే శరణమయ్యప్ప",
    "ఓం నీలిమలై యేట్రమే శరణమయ్యప్ప",
    "ఓం అప్పాచి మేడే శరణమయ్యప్ప",
    "ఓం శబరిపీటమే శరణమయ్యప్ప",
    "ఓం శరం గుత్తి ఆలే శరణమయ్యప్ప",
    "ఓం భస్మకుళమే శరణమయ్యప్ప",
    "ఓం పదునేట్టాం బడియే శరణమయ్యప్ప",
    "ఓం నెయ్యీభి షేకప్రియనే శరణమయ్యప్ప",
    "ఓం కర్పూర జ్యోతియే శరణమయ్యప్ప",
    "ఓం జ్యోతిస్వరూపనే శరణమయ్యప్ప",
    "ఓం మకర జ్యోతియే శరణమయ్యప్ప",
    "ఓం పందల రాజకుమారనే శరణమయ్యప్ప",
    "ఓం హరిహర సుతనే ఆనందచిత్తన్ అయ్యప్ప స్వామినే శరణమయ్యప్ప"
];

const naamaJapamEnglish = Array(108).fill("Om Sri Swamiye Saranam Ayyappa");
const naamaJapamTelugu = Array(108).fill("ఓం శ్రీ స్వామియే శరణం అయ్యప్ప");

const englishSlogans = [
    "svāmi śaraṇaṃ – ayyappa śaraṇaṃ",
    "bhagavān śaraṇaṃ – bhagavati śaraṇaṃ",
    "dēvan śaraṇaṃ – dēvī śaraṇaṃ",
    "dēvan pādaṃ – dēvī pādaṃ",
    "svāmi pādaṃ – ayyappa pādaṃ",
    "bhagavānē – bhagavatiyē",
    "īśvaranē – īśvariyē",
    "dēvanē – dēviyē",
    "śaktanē – śaktiyē",
    "svāmiyē – ayyapō",
    "pallikaṭṭu – śabarimalakku",
    "irumuḍikaṭṭu – śabarimalakku",
    "kattuṅkaṭṭu – śabarimalakku",
    "kallummulluṃ – kālikimettai",
    "ettiviḍayyā – tūkikkaviḍayyā",
    "dēhabalandā – pādabalandā",
    "yāraikāna – svāmiyaikāna",
    "svāmiyaikaṇḍāl – mōkṣaṅkiṭṭuṃ",
    "svāmimārē – ayyappamārē",
    "neyyābhiṣēkaṃ – svāmikkē",
    "karpūradīpaṃ – svāmikkē",
    "pālābhiṣēkaṃ – svāmikkē",
    "bhasmābhiṣēkaṃ – svāmikkē",
    "tēnābhiṣēkaṃ – svāmikkē",
    "chandanābhiṣēkaṃ – svāmikkē",
    "pūlābhiṣēkaṃ – svāmikkē",
    "pannīrābhiṣēkaṃ – svāmikkē",
    "pambāśisuvē – ayyappā",
    "kānanavāsā – ayyappā",
    "śabarigirīśā – ayyappā",
    "pandaḻarājā – ayyappā",
    "pambāvāsā – ayyappā",
    "van‍pulivāhana – ayyappā",
    "sundararūpā – ayyappā",
    "ṣaṇmugasōdara – ayyappā",
    "mōhinitanayā – ayyappā",
    "gaṇēśasōdara – ayyappā",
    "hariharatanayā – ayyappā",
    "anādharakṣaka – ayyappā",
    "sadgurunāthā – ayyappā",
    "svāmiyē – ayyappō",
    "ayyappō – svāmiyē",
    "svāmi śaraṇaṃ – ayyappa śaraṇaṃ"
];

const teluguSlogans = [
    "స్వామి శరణం – అయ్యప్ప శరణం",
    "భగవాన్ శరణం – భగవతి శరణం",
    "దేవన్ శరణం – దేవీ శరణం",
    "దేవన్ పాదం – దేవీ పాదం",
    "స్వామి పాదం – అయ్యప్ప పాదం",
    "భగవానే – భగవతియే",
    "ఈశ్వరనే – ఈశ్వరియే",
    "దేవనే – దేవియే",
    "శక్తనే – శక్తియే",
    "స్వామియే – అయ్యపో",
    "పల్లికట్టు – శబరిమలక్కు",
    "ఇరుముడికట్టు – శబరిమలక్కు",
    "కత్తుంకట్టు – శబరిమలక్కు",
    "కల్లుంముల్లుం – కాలికిమెత్తై",
    "ఎత్తివిడయ్యా – తూకిక్కవిడయ్యా",
    "దేహబలందా – పాదబలందా",
    "యారైకాన – స్వామియైకాన",
    "స్వామియైకండాల్ – మోక్షంకిట్టుం",
    "స్వామిమారే – అయ్యప్పమారే",
    "నెయ్యాభిషేకం – స్వామిక్కే",
    "కర్పూరదీపం – స్వామిక్కే",
    "పాలాభిషేకం – స్వామిక్కే",
    "భస్మాభిషేకం – స్వామిక్కే",
    "తేనాభిషేకం – స్వామిక్కే",
    "చందనాభిషేకం – స్వామిక్కే",
    "పూలాభిషేకం – స్వామిక్కే",
    "పన్నీరాభిషేకం – స్వామిక్కే",
    "పంబాశిసువే – అయ్యప్పా",
    "కాననవాసా – అయ్యప్పా",
    "శబరిగిరీశా – అయ్యప్పా",
    "పందళరాజా – అయ్యప్పా",
    "పంబావాసా – అయ్యప్పా",
    "వన్‍పులివాహన – అయ్యప్పా",
    "సుందరరూపా – అయ్యప్పా",
    "షణ్ముగసోదర – అయ్యప్పా",
    "మోహినితనయా – అయ్యప్పా",
    "గణేశసోదర – అయ్యప్పా",
    "హరిహరతనయా – అయ్యప్పా",
    "అనాధరక్షక – అయ్యప్పా",
    "సద్గురునాథా – అయ్యప్పా",
    "స్వామియే – అయ్యప్పో",
    "అయ్యప్పో – స్వామియే",
    "స్వామి శరణం – అయ్యప్ప శరణం"
];

const mantras = [
    {
        deity: 'Ganesh',
        image: 'images/ganesh.jpeg',
        mantraEnglish: 'Ekadantaaya Vidmahe\nVakratundaaya Dheemahi\nTanno Danti Prachodayaat',
        mantraTelugu: 'ఏకదంతాయ విద్మహే, వక్రతుండాయ ధీమహీ, తన్నో దంతి ప్రచోదయాత్',
        audio: 'audio/ganesh_mantra.mpeg'
    },
    {
        deity: 'Kartikeya',
        image: 'images/kartikeya.jpeg',
        mantraEnglish: 'Sharavana Bhavāya Vidmahē\nKārtikēyāya Dhīmahī\nTannō Skandaḥ Prachōdayāt',
        mantraTelugu: 'శరవణ భవాయ విద్మహే కార్తికేయాయ ధీమహి తన్నో స్కంద ప్రచోదయాత్',
        audio: 'audio/kartikeya_mantra.mpeg'
    },
    {
        deity: 'Hanuman',
        image: 'images/Hanuman.jpeg',
        mantraEnglish: 'Om Aim Hrīm Hanumate Śrī Rāmdūtāya Namaḥ',
        mantraTelugu: 'ఓం ఐమ్ హ్రీమ్ హనుమతే శ్రీ రామదూతాయ నమః',
        audio: 'audio/Hanuman_mantras.mpeg'
    },
    {
        deity: 'Ananta Shesha',
        image: 'images/Ananta Shesha.jpg',
        mantraEnglish: 'Om Sarparajaya Vidmahe Nagarajaya Dhimahi Tanno Anantah Prachodayat',
        mantraTelugu: 'ఓం సర్పరాజాయ విద్మహే నాగరాజాయ ధీమహి తన్నో అనంతః ప్రచోదయాత్',
        audio: 'audio/Ananta_Shesha_mantra.mpeg'
    },
    {
        deity: 'Durga Matha',
        image: 'images/Durga_matha_mantra.jpeg',
        mantraEnglish: 'Om Katyayanaya Vidmahe\nKanyakumari Dhimahi\nTanno Durgah Prachodayat',
        mantraTelugu: 'ఓం కాత్యాయనాయ విద్మహే కన్యాకుమారి ధీమహీ తన్నో దుర్గ: ప్రచోదయాత్',
        audio: 'audio/Durga_matha_mantra.mpeg'
    }
];
const homeTranslations = {
    english: {
        appTitle: "SADHANA",
        subtitle: "Select your path of devotion",
        ayyappaCardTitle: "AYYAPPA PRADAKSHINA",
        ayyappaCardDesc: "Om Sri Swamiye Saranam Ayyappa",
        hanumanCardTitle: "HANUMAN PRADAKSHINA",
        hanumanCardDesc: "Jai Bajrangbali",
        saiCardTitle: "SAI BABA PRADAKSHINA",
        saiCardDesc: "Om Sai Ram",
        mantraCardTitle: "MANTRA JAPA",
        mantraCardDesc: "Divine Chants",
        poojaCardTitle: "POOJA",
        poojaCardDesc: "Worship Procedures",
        ganeshPoojaTitle: "Ganesha Chaturthi Pooja Vidhanam & Vrata Kalpam",
        ganeshPoojaDesc: "Complete Pooja Procedure",
        pradakshinaCardTitle: "PRADAKSHINA",
        pradakshinaCardDesc: "Count Every Step, Chant Every Mantra",
        stotramCardTitle: "STOTRAM",
        stotramCardDesc: "Stotram"
    },
    telugu: {
        appTitle: "సాధన",
        subtitle: "మీ భక్తి మార్గాన్ని ఎంచుకోండి",
        ayyappaCardTitle: "అయ్యప్ప ప్రదక్షిణ",
        ayyappaCardDesc: "ఓం శ్రీ స్వామియే శరణం అయ్యప్ప",
        hanumanCardTitle: "హనుమాన్ ప్రదక్షిణ",
        hanumanCardDesc: "జై బజరంగబలి",
        saiCardTitle: "సాయి బాబా ప్రదక్షిణ",
        saiCardDesc: "ఓం సాయి రామ్",
        mantraCardTitle: "మంత్ర జపం",
        mantraCardDesc: "దైవిక శ్లోకాలు",
        poojaCardTitle: "పూజ",
        poojaCardDesc: "పూజా విధానాలు",
        ganeshPoojaTitle: "వినాయక చవితి పూజా విధానం & వ్రత కల్పం",
        ganeshPoojaDesc: "పూర్తి పూజా విధానం",
        pradakshinaCardTitle: "ప్రదక్షిణ",
        pradakshinaCardDesc: "ప్రతి అడుగు లెక్కించండి, ప్రతి మంత్రం జపించండి",
        stotramCardTitle: "స్తోత్రం",
        stotramCardDesc: "స్తోత్రం"

    }
};

const ganeshPoojaContent = {
    telugu: `
గణేశ చతుర్థి పూజా విధానం, వ్రత కల్పం

ప్రార్థన
శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ ।
ప్రసన్న వదనం ధ్యాయేత్సర్వ విఘ్నోపశాంతయే ॥

అయం ముహూర్తస్సుముహూర్తోఽస్తు ।
తదేవ లగ్నం సుదినం తదేవ, తారాబలం చంద్రబలం తదేవ, విద్యాబలం దైవబలం తదేవ, లక్ష్మీపతే తేంఘ్రియుగం స్మరామి, సుముహూర్తోఽస్తు ।

యశ్శివో నామరూపాభ్యాం యా దేవీ సర్వమంగళా ।
తయోస్సంస్మరణాత్ పుంసాం సర్వతో జయమంగళమ్ ॥

లాభస్తేషాం జయస్తేషాం కుతస్తేషాం పరాభవః ।
యేషామిందీవరశ్యామో హృదయస్థోజనార్థనః ॥

ఆపదామపహర్తారం దాతారం సర్వసంపదామ్ ।
లోకాభిరామం శ్రీరామం భూయో భూయో నమామ్యహమ్ ॥

(శ్రీ విఘ్నేశ్వర షోడశనామ స్తోత్రం)
సుముఖశ్చైకదంతశ్చ కపిలో గజకర్ణికః ।
లంబోదరశ్చ వికటో విఘ్నరాజో గణాధిపః ॥ 1 ॥

ధూమకేతు-ర్గణాధ్యక్షో ఫాలచంద్రో గజాననః ।
వక్రతుండ-శ్శూర్పకర్ణో హేరంబ-స్స్కందపూర్వజః ॥ 2 ॥

షోడశైతాని నామాని యః పఠే-చ్ఛృణు-యాదపి ।
విద్యారంభే వివాహే చ ప్రవేశే నిర్గమే తథా ।
సంగ్రామే సర్వ కార్యేషు విఘ్నస్తస్య న జాయతే ॥ 3 ॥

అభీప్సితార్థ సిద్ధ్యర్థం పూజితో యస్సురైరపి ।
సర్వవిఘ్నచ్చిదేతస్మై శ్రీ మహాగణాధిపతయే నమః ॥

ఓం శ్రీలక్ష్మీ నారాయణాభ్యాం నమః ।
ఓం ఉమా మహేశ్వరాభ్యాం నమః ।
ఓం వాణీ హిరణ్యగర్భాభ్యాం నమః ।
ఓం శచీ పురందరాభ్యాం నమః ।
ఓం అరుంధతీ వశిష్ఠాభ్యాం నమః ।
ఓం శ్రీ సితారామాభ్యాం నమః ।
నమస్సర్వేభ్యో మహాజనేభ్యో నమః ॥
అయం ముహూర్త-స్సుముహూర్తోఽస్తు ॥

శరీర శుద్ధి
అపవిత్రః పవిత్రో వా సర్వావస్థాం᳚ గతోఽపివా ।
యః స్మరేత్ పుండరీకాక్షం స బాహ్యాభ్యంతర శ్శుచిః ॥
పుండరీకాక్ష ! పుండరీకాక్ష ! పుండరీకాక్షాయ నమః ।

ఆచమనః
ఓం ఆచమ్య
ఓం కేశవాయ స్వాహా
ఓం నారాయణాయ స్వాహా
ఓం మాధవాయ స్వాహా (ఇతి త్రిరాచమ్య)
ఓం గోవిందాయ నమః (పాణీ మార్జయిత్వా)
ఓం విష్ణవే నమః
ఓం మధుసూదనాయ నమః (ఓష్ఠౌ మార్జయిత్వా)
ఓం త్రివిక్రమాయ నమః
ఓం వామనాయ నమః (శిరసి జలం ప్రోక్ష్య)
ఓం శ్రీధరాయ నమః
ఓం హృషీకేశాయ నమః (వామహస్తె జలం ప్రోక్ష్య)
ఓం పద్మనాభాయ నమః (పాదయోః జలం ప్రోక్ష్య)
ఓం దామోదరాయ నమః (శిరసి జలం ప్రోక్ష్య)
ఓం సంకర్షణాయ నమః (అంగుళిభిశ్చిబుకం జలం ప్రోక్ష్య)
ఓం వాసుదేవాయ నమః
ఓం ప్రద్యుమ్నాయ నమః (నాసికాం స్పృష్ట్వా)
ఓం అనిరుద్ధాయ నమః
ఓం పురుషోత్తమాయ నమః
ఓం అధోక్షజాయ నమః
ఓం నారసింహాయ నమః (నేత్రే శ్రోత్రే చ స్పృష్ట్వా)
ఓం అచ్యుతాయ నమః (నాభిం స్పృష్ట్వా)
ఓం జనార్ధనాయ నమః (హృదయం స్పృష్ట్వా)
ఓం ఉపేంద్రాయ నమః (హస్తం శిరసి నిక్షిప్య)
ఓం హరయే నమః
ఓం శ్రీకృష్ణాయ నమః (అంసౌ స్పృష్ట్వా)
ఓం శ్రీకృష్ణ పరబ్రహ్మణే నమో నమః

భూతోచ్చాటన
ఉత్తిష్ఠంతు । భూత పిశాచాః । యే తే భూమిభారకాః । యే తేషామవిరోధేన । బ్రహ్మకర్మ సమారభే । ఓం భూర్భువస్సువః ।
దైవీ గాయత్రీ చందః ప్రాణాయామే వినియోగః

ప్రాణాయామః
ఓం భూః । ఓం భువః । ఓగ్ం సువః । ఓం మహః । ఓం జనః । ఓం తపః । ఓగ్ం స॒త్యమ్ ।
ఓం తత్స॑వి॒తుర్వరే᳚ణ్యం॒ భర్గో॑ దే॒వస్య॑ ధీమహి ।
ధియో॒ యో నః॑ ప్రచో॒దయా᳚త్ ॥
ఓమాపో॒ జ్యోతీ॒ రసో॒ఽమృతం॒ బ్రహ్మ॒ భూ-ర్భువ॒-స్సువ॒రోమ్ ॥

సంకల్పః
మమోపాత్త, దురిత క్షయద్వారా, శ్రీ పరమేశ్వర-ముద్దిస్య, శ్రీ పరమేశ్వర ప్రీత్యర్థం, శుభే, శోభనే, అభ్యుదయ ముహూర్తే, శ్రీ మహావిష్ణో రాజ్ఞయా, ప్రవర్త మానస్య, అద్య బ్రహ్మణః, ద్వితీయ పరార్థే, శ్వేతవరాహ కల్పే, వైవశ్వత మన్వంతరే, కలియుగే, ప్రథమ పాదే, (భారత దేశః - జంబూ ద్వీపే, భరత వర్షే, భరత ఖండే, మేరోః దక్షిణ/ఉత్తర దిగ్భాగే; అమేరికా - క్రౌంచ ద్వీపే, రమణక వర్షే, ఐంద్రిక ఖండే, సప్త సముద్రాంతరే, కపిలారణ్యే), శోభన గృహే, సమస్త దేవతా బ్రాహ్మణ, హరిహర గురుచరణ సన్నిథౌ, అస్మిన్, వర్తమాన, వ్యావహారిక, చాంద్రమాన, ... సంవత్సరే, ... అయనే, ... ఋతే, ... మాసే, ... పక్షే, ... తిథౌ, ... వాసరే, ... శుభ నక్షత్ర, శుభ యోగ, శుభ కరణ, ఏవంగుణ, విశేషణ, విశిష్ఠాయాం, శుభ తిథౌ, శ్రీమాన్, ... గోత్రః, ... నామధేయః, ... గోత్రస్య, ... నామధేయోహం ... మమ ధర్మపత్నీ సమేతస్య, అస్మాకం సహకుటుంబానాం, క్షేమస్థైర్య విజయ అభయ ఆయురారోగ్య ఐశ్వర్యాభివృధ్హ్యర్థం, ధర్మార్థ కామ మోక్ష చతుర్విధ ఫల పురుషార్థ సిద్ద్యర్థం, ఇష్టకామ్యార్థ సిద్ధ్యర్థం, మనోవాంఛాఫల సిద్ధర్థం, సమస్త దురితోప శాంత్యర్థం, సమస్త మంగళావాప్యర్థం, పుత్రపౌత్రాభివృద్ధ్యర్థం, సకలకార్యేషు సర్వదా దిగ్విజయసిద్ధ్యర్థం, వర్షే వర్షే ప్రయుక్త శ్రీ వరసిద్ధి వినాయక దేవతా-ముద్ధిస్య, శ్రీ వరసిద్ధి వినాయక దేవతా ప్రీత్యర్థం, కల్పోక్త ప్రకారేణ యావచ్ఛక్తి ధ్యానావాహనాది షోడశోపచారపూజాం కరిష్యే ।

తదంగ కలశపూజాం కరిష్యే ॥
కలశం గంధపుష్పాక్షతైరభ్యర్చ్య ।
తస్యోపరి హస్తం నిధాయ -

కలశ పూజ
కలశస్య ముఖే విష్ణుః కంఠే రుద్ర-స్సమాహితః ।
మూలే తత్ర స్థితో బ్రహ్మా మధ్యే మాతృగణాస్మృతాః ॥

కుక్షౌతు సాగరాః సర్వే సప్తద్వ్వీపా వసుంధరా ।
ఋగ్వేదోధ యజుర్వేద-స్సామవేదో-హ్యధర్వణః ॥
అంగైశ్చ సహితాస్సర్వే కలశాంబు సమాశ్రితాః ।

ఆ కలశేషు ధావతి పవిత్రే పరిషిచ్యతే ।
ఉక్థైర్యజ్ఞేషు వర్ధతే ॥


ఆపో॒ వా ఇ॒దగ్ం సర్వం॒-విఀశ్వా॑ భూ॒తాన్యాపః॑ ప్రా॒ణా వా ఆపః॑ ప॒శవ॒ ఆపోఽన్న॒మాపో -ఽమృ॑త॒మాపః॑ స॒మ్రాడాపో॑ వి॒రాడాపః॑ స్వ॒రాడాపః॒ ఛందా॒గ్॒స్యాపో॒ జ్యోతీ॒గ్॒ష్యాపో॒ యజూ॒గ్॒ష్యాపః॑ స॒త్యమాపః॒ సర్వా॑ దే॒వతా॒ ఆపో॒ భూర్భువ॒స్సువ॒రాప॒ ఓమ్ ॥ 29.1 (తై. అర. 6.29.1)

గంగే చ యమునే చైవ గోదావరి సరస్వతీ ।
నర్మదే సింధు కావేరీ జలేస్మిన్ సన్నిధిం కురు ॥

ఆయాంతు దేవపూజార్థం దురితక్షయకారకాః ।
(కలశోదకేన పూజాద్రవ్యాణి, ఆత్మానం, దేవం చ సంప్రోక్ష్య)


ఓం గ॒ణానాం᳚ త్వా గ॒ణప॑తిగ్ం హవామహే క॒విం క॑వీ॒నాం ఉప॒మశ్ర॑వస్తవమ్ ।
జ్యే॒ష్ఠ॒రాజం॒ బ్రహ్మ॑ణాం బ్రహ్మణస్పత॒ ఆ నః॑ శృ॒ణ్వన్నూ॒తిభి॑స్సీద॒ సాద॑నమ్ ॥

శ్రీ వరసిద్ధి వినాయక దేవతాయే నమః ।
అథ ప్రాణప్రతిష్ఠాపనం కరిష్యే ।

శ్రీ వరసిద్ధి వినాయక ప్రాణ ప్రతిష్ఠా
ఓం అసునీతే పునరస్మాసు చక్షుః పునఃప్రాణమిహ నో ధేహి భోగమ్ ।
జ్యోక్పశ్యేమ సూర్యముచ్చరం తమనుమతే మృడయా నః స్స్వస్తి ॥ ఋ.వే. - 10.59.6
అమృతం వై ప్రాణా అమృతమాపః ప్రాణానేవ యథాస్థానముపహ్వయతే ।
ఇత్యాద్యేన ప్రాణప్రతిష్ఠాపనం కృత్వా, నమస్కృత్వా ॥

ఓం శ్రీ వరసిద్ధి వినాయకాయ నమః ।
స్వామిన్ సర్వజగన్నాథ యావత్పూజావసానకమ్ ।
తావత్వం ప్రీతిభావేన బింబేఽస్మిన్ సన్నిధిం కురు ॥
ఆవాహితో భవ, స్థాపితో భవ, సుముఖో భవ, సుప్రసన్నో భవ, వరదో భవ, ప్రసీద, ప్రసీద, ప్రసీద ।

షోడశోపచార పూజా

ప్రార్థన
భవసంచితపాపౌఘ విధ్వంసనవిచక్షణమ్ ।
విఘ్నాంధకారభాస్వంతం విఘ్నరాజమహం భజే ॥

ఏకదంతం శూర్పకర్ణం గజవక్త్రం చతుర్భుజమ్ ।
పాశాంకుశధరం దేవం ధ్యాయేత్సిద్ధివినాయకమ్ ॥

ఉత్తమం గణనాథస్య వ్రతం సంపత్కరం శుభమ్ ।
భక్తాభీష్టప్రదం తస్మాద్ధ్యాయేత్తం విఘ్ననాయకమ్ ॥

ధ్యానం
ధ్యాయేద్గజాననం దేవం తప్తకాంచనసన్నిభమ్ ।
చతుర్భుజం మహాకాయం సర్వాభరణభూషితమ్ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ధ్యాయామి ।

ఆవాహనం
(సహస్రశీర్షా ... దశాంగుళం)
అత్రాగచ్ఛ జగద్వంద్య సురరాజార్చితేశ్వర ।
అనాథనాథ సర్వజ్ఞ గౌరీగర్భసముద్భవ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఆవాహయామి ।

ఆసనం
(పురుష ఏవేదగం ... అతిరోహతి)
మౌక్తికైః పుష్పరాగైశ్చ నానారత్నైర్విరాజితమ్ ।
రత్నసింహాసనం చారు ప్రీత్యర్థం ప్రతిగృహ్యతామ్ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఆసనం సమర్పయామి ।

అర్ఘ్యం
(ఏతావానస్య ... దివి)
గౌరీపుత్ర నమస్తేఽస్తు శంకరప్రియనందన ।
గృహాణార్ఘ్యం మయా దత్తం గంధపుష్పాక్షతైర్యుతమ్ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః అర్ఘ్యం సమర్పయామి ।

పాద్యం
(త్రిపాదూర్ధ్వః ... అభి)
గజవక్త్ర నమస్తేఽస్తు సర్వాభీష్టప్రదాయక ।
భక్త్యా పాద్యం మయా దత్తం గృహాణ ద్విరదానన ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః పాద్యం సమర్పయామి ।

మధుపర్కః
దధిక్షీరసమాయుక్తం మధ్వాజ్యేన సమన్వితమ్ ।
మధుపర్కం గృహాణేదం గజవక్త్ర నమోఽస్తు తే ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః మధుపర్కం సమర్పయామి ।

ఆచమనీయం
(తస్మాద్విరాడజాయత ... పురః)
అనాథనాథ సర్వజ్ఞ గీర్వాణవరపూజిత ।
గృహాణాచమనం దేవ తుభ్యం దత్తం మయా ప్రభో ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఆచమనీయం సమర్పయామి ।

పంచామృత స్నానం
పయో దధి ఘృతం చైవ శర్కరా మధు సంయుతమ్ ।
పంచామృతం గృహాణేదం స్నానాయ గణనాయక ॥
స్నానం పంచామృతైర్దేవ గృహాణ గణనాయక ।
అనాథనాథ సర్వజ్ఞ గీర్వాణగణపూజిత ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః పంచామృత స్నానం సమర్పయామి ।

శుద్ధోదక స్నానం
(యత్పురుషేణ ... హవిః)
గంగాదిసర్వతీర్థేభ్య ఆహృతైరమలైర్జలైః ।
స్నానం కురుష్య భగవన్నుమాపుత్ర నమోఽస్తు తే ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః శుద్ధోదక స్నానం సమర్పయామి ।
స్నానానంతరం ఆచమనీయం సమర్పయామి ।

వస్త్రం
(సప్తాస్యాసన్ ... పశుం)
రక్తవస్త్రద్వయం చారు దేవయోగ్యం చ మంగళమ్ ।
శుభప్రద గృహాణ త్వం లంబోదర హరాత్మజ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః వస్త్రయుగ్మం సమర్పయామి ।

యజ్ఞోపవీతం
రాజతం బ్రహ్మసూత్రం చ కాంచనం చోత్తరీయకమ్ ।
గృహాణ దేవ సర్వజ్ఞ భక్తానామిష్టదాయక ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః యజ్ఞోపవీతం సమర్పయామి ।

గంధం
చందనాగరు కర్పూర కస్తూరీ కుంకుమాన్వితమ్ ।
విలేపనం సురశ్రేష్ఠ ప్రీత్యర్థం ప్రతిగృహ్యతామ్ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః శ్రీగంధాన్ ధారయామి ।

అక్షతాన్
అక్షతాన్ ధవళాన్ దివ్యాన్ శాలీయాంస్తండులాన్ శుభాన్ ।
గృహాణ పరమానంద శంభుపుత్ర నమోఽస్తు తే ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః అలంకరణార్థం అక్షతాన్ సమర్పయామి ।

పుష్పాణి
సుగంధాని చ పుష్పాణి జాతీకుందముఖాని చ ।
ఏకవింశతిపత్రాణి సంగృహాణ నమోఽస్తు తే ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః పుష్పైః పూజయామి ।

అథాంగపూజా
ఓం గణేశాయ నమః - పాదౌ పూజయామి ।
ఓం ఏకదంతాయ నమః - గుల్ఫౌ పూజయామి ।
ఓం శూర్పకర్ణాయ నమః - జానునీ పూజయామి ।
ఓం విఘ్నరాజాయ నమః - జంఘే పూజయామి ।
ఓం ఆఖువాహనాయ నమః - ఊరూం పూజయామి ।
ఓం హేరంబాయ నమః - కటిం పూజయామి ।
ఓం లంబోదరాయ నమః - ఉదరం పూజయామి ।
ఓం గణనాథాయ నమః - నాభిం పూజయామి ।
ఓం గణేశాయ నమః - హృదయం పూజయామి ।
ఓం స్థూలకంఠాయ నమః - కంఠం పూజయామి ।
ఓం స్కందాగ్రజాయ ణమహ శ్కంధౌ పూజయామి ।
ఓం పాశహస్తాయ ణమహ హస్థౌ పూజయామి ।
ఓం గజవక్త్రాయ నమః - వక్త్రం పూజయామి ।
ఓం విఘ్నహంత్రే నమః - నేత్రం పూజయామి ।
ఓం శూర్పకర్ణాయ నమః - కర్ణౌ పూజయామి ।
ఓం ఫాలచంద్రాయ నమః - లలాటం పూజయామి ।
ఓం సర్వేశ్వరాయ నమః - శిరః పూజయామి ।
ఓం విఘ్నరాజాయ నమః - సర్వాణ్యంగాణి పూజయామి ।

అథైకవింశతి పత్రపూజ
సుముఖాయనమః - మాచీపత్రం పూజయామి (దర్భ) ।
గణాధిపాయ నమః - బృహతీపత్రం పూజయామి ।
ఉమాపుత్రాయ నమః - బిల్వపత్రం పూజయామి (మారేడు) ।
గజాననాయ నమః - దుర్వాయుగ్మం పూజయామి(గరిక) ।
హరసూనవేనమః - దత్తూరపత్రం పూజయామి (ఉమ్మెత్త) ।
లంబోదరాయనమః - బదరీపత్రం పూజయామి (రేగు) ।
గుహాగ్రజాయనమః - అపామార్గపత్రం పూజయామి (ఉత్తరేణి) ।
గజకర్ణాయనమః - తులసీపత్రం పూజయామి ।
ఏకదంతాయ నమః - చూతపత్రం పూజయామి (ఆమ్ర) ।
వికటాయ నమః - కరవీరపత్రం పూజయామి (గన్నేరు)।
భిన్నదంతాయ నమః - విష్ణుక్రాంతపత్రం పూజయామి ।
వటవేనమః - దాడిమీపత్రం పూజయామి (దానిమ్మ) ।
సర్వేశ్వరాయనమః - దేవదారుపత్రం పూజయామి ।
ఫాలచంద్రాయ నమః - మరువకపత్రం పూజయామి ।
హేరంబాయనమః - సింధువారపత్రం పూజయామి ।
శూర్పకర్ణాయనమః - జాజీపత్రం పూజయామి ।
సురాగ్రజాయనమః - గండకీపత్రం పూజయామి ।
ఇభవక్త్రాయనమః - శమీపత్రం పూజయామి (జమ్మి) ।
వినాయకాయ నమః - అశ్వత్థపత్రం పూజయామి (రావి) ।
సురసేవితాయ నమః - అర్జునపత్రం పూజయామి (మద్ది) ।
కపిలాయ నమః - అర్కపత్రం పూజయామి (జిల్లేడు) ।
శ్రీ గణేశ్వరాయ నమః - ఏకవింశతి పత్రాణి పూజయామి ।

ఏకవింశతి పుష్ప పూజా
ఓం పంచాస్య గణపతయే నమః - పున్నాగ పుష్పం సమర్పయామి ।
ఓం మహా గణపతయే నమః - మందార పుష్పం సమర్పయామి ।
ఓం ధీర గణపతయే నమః - దాడిమీ పుష్పం సమర్పయామి ।
ఓం విష్వక్సేన గణపతయే నమః - వకుళ పుష్పం సమర్పయామి ।
ఓం ఆమోద గణపతయే నమః - అమృణాళ(తామర) పుష్పం సమర్పయామి ।
ఓం ప్రమథ గణపతయే నమః - పాటలీ పుష్పం సమర్పయామి ।
ఓం రుద్ర గణపతయే నమః - ద్రోణ పుష్పం సమర్పయామి ।
ఓం విద్యా గణపతయే నమః - ధత్తూర పుష్పం సమర్పయామి ।
ఓం విఘ్న గణపతయే నమః - చంపక పుష్పం సమర్పయామి ।
ఓం దురిత గణపతయే నమః - రసాల పుష్పం సమర్పయామి ।
ఓం కామితార్థప్రద గణపతయే నమః - కేతకీ పుష్పం సమర్పయామి ।
ఓం సమ్మోహ గణపతయే నమః - మాధవీ పుష్పం సమర్పయామి ।
ఓం విష్ణు గణపతయే నమః - శమ్యాక పుష్పం సమర్పయామి ।
ఓం ఈశ గణపతయే నమః - అర్క పుష్పం సమర్పయామి ।
ఓం గజాస్య గణపతయే నమః - కల్హార పుష్పం సమర్పయామి ।
ఓం సర్వసిద్ధి గణపతయే నమః - సేవంతికా పుష్పం సమర్పయామి ।
ఓం వీర గణపతయే నమః - బిల్వ పుష్పం సమర్పయామి ।
ఓం కందర్ప గణపతయే నమః - కరవీర పుష్పం సమర్పయామి ।
ఓం ఉచ్ఛిష్ఠ గణపతయే నమః - కుంద పుష్పం సమర్పయామి ।
ఓం బ్రహ్మ గణపతయే నమః - పారిజాత పుష్పం సమర్పయామి ।
ఓం జ్ఞాన గణపతయే నమః - జాతీ పుష్పం సమర్పయామి ।

ఏకవింశతి దూర్వాయుగ్మ పూజా
ఓం గణాధిపాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం పాశాంకుశధరాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం ఆఖువాహనాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం వినాయకాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం ఈశపుత్రాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం సర్వసిద్ధిప్రదాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం ఏకదంతాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం ఇభవక్త్రాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం మూషకవాహనాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం కుమారగురవే నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం కపిలవర్ణాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం బ్రహ్మచారిణే నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం మోదకహస్తాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం సురశ్రేష్ఠాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం గజనాసికాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం కపిత్థఫలప్రియాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం గజముఖాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం సుప్రసన్నాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం సురాగ్రజాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం ఉమాపుత్రాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।
ఓం స్కందప్రియాయ నమః - దూర్వాయుగ్మం సమర్పయామి ।

ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః నానావిధ పత్ర పుష్పాణి సమర్పయామి ।

శ్రీ వినాయక అష్టోత్తరశత నామ పూజా
ఓం గజాననాయ నమః
ఓం గణాధ్యక్షాయ నమః
ఓం విఘ్నరాజాయ నమః
ఓం వినాయకాయ నమః
ఓం ద్వైమాతురాయ నమః
ఓం ద్విముఖాయ నమః
ఓం ప్రముఖాయ నమః
ఓం సుముఖాయ నమః
ఓం కృతినే నమః
ఓం సుప్రదీప్తాయ నమః (10)
ఓం సుఖనిధయే నమః
ఓం సురాధ్యక్షాయ నమః
ఓం సురారిఘ్నాయ నమః
ఓం మహాగణపతయే నమః
ఓం మాన్యాయ నమః
ఓం మహాకాలాయ నమః
ఓం మహాబలాయ నమః
ఓం హేరంబాయ నమః
ఓం లంబజఠరాయ నమః
ఓం హ్రస్వగ్రీవాయ నమః (20)
ఓం ప్రథమాయ నమః
ఓం ప్రాజ్ఞాయ నమః
ఓం ప్రమోదాయ నమః
ఓం మోదకప్రియాయ నమః
ఓం విఘ్నకర్త్రే నమః
ఓం విఘ్నహంత్రే నమః
ఓం విశ్వనేత్రే నమః
ఓం విరాట్పతయే నమః
ఓం శ్రీపతయే నమః
ఓం వాక్పతయే నమః (30)
ఓం శృంగారిణే నమః
ఓం ఆశ్రితవత్సలాయ నమః
ఓం శివప్రియాయ నమః
ఓం శీఘ్రకారిణే నమః
ఓం శాశ్వతాయ నమః
ఓం బల్వాన్వితాయ నమః
ఓం బలోద్దతాయ నమః
ఓం భక్తనిధయే నమః
ఓం భావగమ్యాయ నమః
ఓం భావాత్మజాయ నమః (40)
ఓం అగ్రగామినే నమః
ఓం మంత్రకృతే నమః
ఓం చామీకర ప్రభాయ నమః
ఓం సర్వాయ నమః
ఓం సర్వోపాస్యాయ నమః
ఓం సర్వకర్త్రే నమః
ఓం సర్వనేత్రే నమః
ఓం సర్వసిద్ధిప్రదాయ నమః
ఓం సర్వసిద్ధాయ నమః
ఓం సర్వవంద్యాయ నమః (50)
ఓం నర్వసిద్ది-ప్రదాయ నమః
ఓం పంచహస్తాయ నమః
ఓం పార్వతీనందనాయ నమః
ఓం ప్రభవే నమః
ఓం కుమార గురవే నమః
ఓం కుంజరాసుర-భంజనాయ నమః
ఓం కాంతిమతే నమః
ఓం ధృతిమతే నమః
ఓం కామినే నమః
ఓం కపిత్థఫలప్రియాయ నమః (60)
ఓం బ్రహ్మచారిణే నమః
ఓం బ్రహ్మరూపిణే నమః
ఓం మహోదరాయ నమః
ఓం మదోత్కటాయ నమః
ఓం మహావీరాయ నమః
ఓం మంత్రిణే నమః
ఓం మంగళసుస్వరాయ నమః
ఓం ప్రమదాయ నమః
ఓం జ్యాయసే నమః
ఓం యక్షికిన్నరసేవితాయ నమః (70)
ఓం గంగాసుతాయ నమః
ఓం గణాధీశాయ నమః
ఓం గంభీరనినదాయ నమః
ఓం వటవే నమః
ఓం జ్యోతిషే నమః
ఓం అక్రాంత-పదచిత్ప్రభవే నమః
ఓం అభీష్టవరదాయ నమః
ఓం మంగళప్రదాయ నమః
ఓం అవ్యక్త రూపాయ నమః
ఓం పురాణపురుషాయ నమః (80)
ఓం పూష్ణే నమః
ఓం పుష్కరోత్క్షిప్త-వారణాయ నమః
ఓం అగ్రగణ్యాయ నమః
ఓం అగ్రపూజ్యాయ నమః
ఓం అపాకృతపరాక్రమాయ నమః
ఓం సత్యధర్మిణే నమః
ఓం సఖ్యై నమః
ఓం సారాయ నమః
ఓం సరసాంబునిధయే నమః
ఓం మహేశాయ నమః (90)
ఓం విశదాంగాయ నమః
ఓం మణికింకిణీ మేఖలాయ నమః
ఓం సమస్తదేవతామూర్తయే నమః
ఓం సహిష్ణవే నమః
ఓం బ్రహ్మవిద్యాది దానభువే నమః
ఓం విష్ణవే నమః
ఓం విష్ణుప్రియాయ నమః
ఓం భక్తజీవితాయ నమః
ఓం ఐశ్వర్యకారణాయ నమః
ఓం సతతోత్థితాయ నమః (100)
ఓం విష్వగ్దృశేనమః
ఓం విశ్వరక్షా-విధానకృతే నమః
ఓం కళ్యాణగురవే నమః
ఓం ఉన్మత్తవేషాయ నమః
ఓం పరజయినే నమః
ఓం సమస్త జగదాధారాయ నమః
ఓం సర్వైశ్వర్యప్రదాయ నమః
ఓం శ్రీ విఘ్నేశ్వరాయ నమః (108)
శ్రీ మహాగణాధిపతయే నమః ।
నానావిధ పరిమళ పత్రపుష్ప పూజాం సమర్పయామి ।

ధూపం
దశాంగం గుగ్గులోపేతం సుగంధి సుమనోహరమ్ ।
ఉమాసుత నమస్తుభ్యం గృహాణ వరదో భవ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ధూపమాఘ్రాపయామి ।

దీపం
సాజ్యం త్రివర్తిసంయుక్తం వహ్నినా ద్యోతితం మయా ।
గృహాణ మంగళం దీపం ఈశపుత్ర నమోఽస్తు తే ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః దీపం దర్శయామి ।

నైవేద్యం
సుగంధాన్ సుకృతాంశ్చైవ మోదకాన్ ఘృత పాచితాన్ ।
నైవేద్యం గృహ్యతాం దేవ చణముద్గైః ప్రకల్పితాన్ ॥
భక్ష్యం భోజ్యం చ లేహ్యం చ చోష్యం పానీయమేవ చ ।
ఇదం గృహాణ నైవేద్యం మయా దత్తం వినాయక ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః నైవేద్యం సమర్పయామి ।

తాంబూలం
పూగీఫలసమాయుక్తం నాగవల్లీదళైర్యుతమ్ ।
కర్పూరచూర్ణసంయుక్తం తాంబూలం ప్రతిగృహ్యతామ్ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః తాంబూలం సమర్పయామి ।
తాంబూల చర్వణానంతరం ఆచమనీయం సమర్పయామి ।

నీరాజనం
ఘృతవర్తి సహస్రైశ్చ కర్పూరశకలైస్తథా ।
నీరాజనం మయా దత్తం గృహాణ వరదో భవ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః నీరాజనం సమర్పయామి ।
నీరాజనానంతరం ఆచమనీయం సమర్పయామి ।

మంత్రపుష్పం
గణాధిప నమస్తేఽస్తు ఉమాపుత్రాఘనాశన ।
వినాయకేశతనయ సర్వసిద్ధిప్రదాయక ॥
ఏకదంతైకవదన తథా మూషకవాహన ।
కుమారగురవే తుభ్యమర్పయామి సుమాంజలిమ్ ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః మంత్రపుష్పం సమర్పయామి ।

ప్రదక్షిణం
ప్రదక్షిణం కరిష్యామి సతతం మోదకప్రియ ।
మద్విఘ్నం హరయే శీఘ్రం భక్తానామిష్టదాయక ॥
ఆఖువాహన దేవేశ విశ్వవ్యాపిన్ వినాయక ।
ప్రదక్షిణం కరోమి త్వాం ప్రసీద వరదో భవ ॥
యాని కాని చ పాపాని జన్మాంతరకృతాని చ ।
తాని తాని ప్రణశ్యంతి ప్రదక్షిణ పదే పదే ॥
పాపోఽహం పాపకర్మాఽహం పాపాత్మా పాపసంభవః ।
త్రాహి మాం కృపయా దేవ శరణాగతవత్సల ॥
అన్యథా శరణం నాస్తి త్వమేవ శరణం మమ ।
తస్మాత్కారుణ్య భావేన రక్ష రక్ష గణాధిప ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఆత్మప్రదక్షిణ నమస్కారాన్ సమర్పయామి ।

సాష్టాంగ నమస్కారం
నమో నమో గణేశాయ నమస్తే విశ్వరూపిణే ।
నిర్విఘ్నం కురు మే కామం నమామి త్వాం గజాననా ॥
అగజానన పద్మార్కం గజానన మహర్నిశమ్ ।
అనేకదం తం భక్తానాం ఏకదంతముపాస్మహే ॥
నమస్తే భిన్నదంతాయ నమస్తే హరసూనవే ।
మమాభీష్టప్రదో భూయో వినాయక నమోఽస్తు తే ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః సాష్టాంగ నమస్కారం సమర్పయామి ।

ప్రార్థన
ప్రసీద దేవదేవేశ ప్రసీద గణనాయక ।
ఈప్సితం మే వరం దేహి పరత్ర చ పరాంగతిమ్ ॥
వినాయక వరం దేహి మహాత్మన్ మోదకప్రియ ।
అవిఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ప్రార్థన నమస్కారాన్ సమర్పయామి ।

రాజోపచార పూజా
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । ఛత్రమాచ్ఛాదయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । చామరైర్వీజయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । గీతం శ్రావయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । నృత్యం దర్శయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । వాద్యం ఘోషయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । ఆందోళికాన్ ఆరోహయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । అశ్వాన్ ఆరోహయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । గజాన్ ఆరోహయామి ।
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః । సమస్త రాజోపచారాన్ దేవోపచారాన్ సమర్పయామి ।

పునరర్ఘ్యం
అర్ఘ్యం గృహాణ హేరంబ వరప్రద వినాయక ।
గంధపుష్పాక్షతైర్యుక్తం భక్త్యా దత్తం మయా ప్రభో ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఇదమర్ఘ్యం ఇదమర్ఘ్యం ఇదమర్ఘ్యమ్ ।

నమస్తుభ్యం గణేశాయ నమస్తే విఘ్ననాయక ।
పునరర్ఘ్యం ప్రదాస్యామి గృహాణ గణనాయక ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఇదమర్ఘ్యం ఇదమర్ఘ్యం ఇదమర్ఘ్యమ్ ।

నమస్తే భిన్నదంతాయ నమస్తే హరసూనవే ।
యిదమర్ఘ్యం ప్రదాస్యామి గృహాణ గణనాయక ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఇదమర్ఘ్యం ఇదమర్ఘ్యం ఇదమర్ఘ్యమ్ ।

గౌర్యంగమలసంభూత స్వామి జ్యేష్ఠ వినాయక ।
గణేశ్వర గృహాణార్ఘ్యం గజానన నమోఽస్తు తే ॥
ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః ఇదమర్ఘ్యం ఇదమర్ఘ్యం ఇదమర్ఘ్యమ్ ।

సమర్పణం
యస్య స్మృత్యా చ నామోక్త్యా తపః పూజా క్రియాదిషు ।
న్యూనం సంపూర్ణతాం యాతి సద్యో వందే గజాననమ్ ॥
మంత్రహీనం క్రియాహీనం భక్తిహీనం వినాయక ।
యత్పూజితం మయా దేవ పరిపూర్ణం తదస్తు తే ॥

అనయా ధ్యానావహనాది షోడశోపచార పూజయా భగవాన్ సర్వాత్మకః శ్రీ సిద్ధి వినాయకః స్వామి సుప్రీతో సుప్రసన్నో వరదో భవంతు ।

విఘ్నేశ్వర కథా

A very long time ago, sages who had accomplished the most intense meditative vows and other distinguished brahmins had gathered in the Naimisha forest to ask Sūta, an accomplished Sage, if there was any sacred vow that one can undertake so as to complete one’s work or initiative without any obstacles and can bear fruits of labour as desired, and that if there was one, they requested him to kindly throw light upon it.

Upon being greeted with verbal niceties in this manner, Sage Sūta, who was an erudite Puranic scholar and a master of all Shastras, says, “In the past, during the gory war for the kingdom of Hastinapura between the cousins – Pāndavas and Kauravas, the eldest of the Pandavas, Dharma Rāja (Yudhishtira) requests Krishna to enlighten him of the God who is to be prayed to win the war and of a sacred vow that when carried out would help win back the lost kingdom.

To this, Lord Krishna answers that every year, on the 4th day of the bright fortnight in the Bhādrapada month, one must perform Sri Varasiddhi Vināyaka Vrata. He adds that the vower must bathe with sesame seed oil, dressed in clean and new clothes, be clean minded on that day and to the best of his strength and ability, make an idol of the Lord using gold, silver, copper or clay, and pray to this idol. He further adds that this idol of Ganesha must be Ekadanta – one-toothed (one-tusked); Shurpa-karna – comprising of ears like a winnowing fan; Chatur-bhuja – the one with four hands, and there’s a noose, elephant goad, kadubu – a traditional stuffed dessert and Abhaya mudra – a gesture of fearlessness in each of his hands. This idol is seated on a well-decorated ornamental dais and is to be worshipped with bhakti – infallible devotion. The vower must offer sandalwood in the name of Ganadhipa (The chief of all Ganas or clans); flowers in the name of Vināyaka (the one without a ruler); incense sticks in the name of Umasuta (the son of Goddess Uma); lamps lit using cotton wicks soaked in ghee, in the name of Rudrapriya (the one loved by Lord Rudra); twenty-one modaks (fried or steamed stuffed dumplings) in the name of Vighna-nāshaka (the destroyer of Obstacles); twenty-one fresh Bermuda grass strips, while chanting twenty-one Ganadhipa names, and aarti (a religious ritual where in a flame/light is offered to the deity) using camphor. Ten of the twenty-one modaks should be donated to needy people along with dakshina (a token of offering either in money or material gifts) and their blessings are to be accepted.

If thus done, all the good-intentioned goals and aspirations shall fructify. Earlier, Lord Shiva during the burning of Tripura; King Rāma during the search for his wife, Sīta; Bhagīratha who got the river Gangā to the earth; the Gods and demons during the churning of ocean for Amrita (the elixir of life) and Samba, ailing with leprosy, had performed and gained blessings by observing Varasiddhi Vināyaka Vrata. And thus, Krishna persuaded Yudhishtira to undertake this sacred vow to win back his kingdom.”

“By observing this vrata, the impoverished gain wealth, the childless beget offspring, a married woman is guaranteed with long companionship, students earn useful knowledge, and a maiden would be blessed with a perfect husband.” Thus, Sage Sūta preaches the other saints about the Varasiddhi Vināyaka Vrata and summarizes that one would befall wrongful accusations if one peeks at the Moon on the fourth day of the bright fortnight in the Bhādrapada month. As a remedy, one must listen to the Syamantakopakhyana (an apologue about a jewel named Syamantaka). Upon hearing this, the other scholarly monks request Sage Sūta to elaborate about the legend behind Syamantaka jewel.

శ్యమంతకోపాఖ్యాన (The legend of the Syamantaka Jewel)

A very long time ago, Lord Shiva anoints Ganesha as the chief of all Ganas (clan of attendants to Lord Shiva), blesses him with the eight classical siddhis (accomplishments) and buddhi (knowledge) as his two wives in the presence of all the Gods. Lord Brahma further blesses that anyone who offers twenty-one modaks to Lord Ganesha, their hard work shall be fructified with the blessings of the Lord Ganesha. Saying so, Lord Brahma offers twenty-one modaks to Lord Ganesha and seeks blessings to carry on his work of Creation without any impediments. The blissful Ganesha then happens to set off on his vehicle – the mouse along with his two wives, Siddhi and Buddhi on a relaxed vacation.

As He passed by the haughty Chandra (the Moon personified), who was arrogant of his beauty, in the Chandraloka (the Moon), He was laughed at in a condescending manner by Chandra. The enraged Ganesha curses that his beauty shall wane. Chandra gets terrified of the curse and hides under a lotus. The other Gods found pity and persuaded Chandra to offer respectful apologies to the Lord. Upon doing so, an obliging Ganesha, offered to reduce the gravity of curse and announced that anyone who peeks at Chandra on the fourth day of the bright fortnight in the Bhādrapada month shall be subject to wrongful accusations, and to be released of the perilous bane, one must read or listen to the legend of Syamantaka jewel. Chandra was filled with humility and devotion and observed the Varasiddhi Vināyaka Vrata as a token of gratitude.

In the Dwapara Yuga, Lord Narayana incarnates as the son of Vasudeva and Devaki, bearing the name Krishna, with a sole intention of relieving the earth of all the evils (and thus reducing the load it bears). Ugrasena’s son Satrājit, a Yadava nobleman prayed ardently to the Sun God. Upon being delighted by his devotion, the Sun God appears in front of him as a dazzling fiery shape. Satrājit requests the Lord to appear in a less blinding form. The Sun God removes the Syamantaka jewel off his neck so as to show His real self with a body like burnished copper and slightly red eyes. Satrājit was elated and offered his greetings and adorations, for which he was gifted with the boon of Syamantaka jewel. He was also apprised that if worn with utter austerity and cleanliness (with respect to both body and mind), the jewel would bestow eight folds of gold each day. When Satrājit returned to Dwāraka with Syamantaka jewel around his neck, people mistook him for the Sun God. He later presented it to his brother Prasena, who was also a ruler of the Yādava province.

On one such day, Prasena happened to wear the Syamantaka jewel and set off hunting with Krishna and Balarāma. In the forest, Prasena was killed unfortunately by a lion that takes the jewel along with it. However, later, the lion was killed by the king of bears, Jāmbavanta, who adorned this jewel on his daughter, Jāmbavati in his cave.

At the same time, as Krishna returned to Dwāraka, a wrongful rumour spread across the city like wildfire alleging that Krishna killed Prasena in the forest for the Syamantaka jewel. Krishna having felt miserable at this blame, learnt from Sage Narada that performing Varasiddhi Vināyaka Vrata on the fourth day of the bright fortnight in the Bhādrapada month would liberate him of all the blame. Having followed his instructions, Krishna set off to the forest, tracing the whereabouts of Prasena. The path led him to the traces of Prasena and the lion, both of whom were dead by then, and then to the cave of Jāmbavanta. Krishna discovered the Syamantaka jewel around Jāmbavati. An overjoyed Krishna blew his conch and attracted the attention of Jāmbavanta. A violent war broke out between the two inside the cave for twenty-one days. The people outside the cave almost lost hopes that Krishna would make it alive, while inside the cave Krishna had to engage for a very long time to gradually tire out Jāmbavanta. Eventually, Krishna presents his Rāmāvatāra (incarnation as Lord Rāma) and thus reveals that He is indeed the respected friend of Jāmbavanta from the Treta Yuga. Jāmbavanta then, graciously accepts defeat and offers his daughter Jāmbavati in marriage to Krishna. And then, along with her even the Syamantaka jewel makes its way to Dwāraka. Krishna goes on to return the jewel to Satrājit, who upon knowing the truth, offers his daughter Satyabhāma in marriage to Krishna and lets him keep the Syamantaka jewel. Thus, the peeking of Chandra on that particular day and the corresponding observance of Varasiddhi Vināyaka Vrata absolved Krishna off the wrongful accusation.

Similarly, anyone who happens to catch a glimpse of the moon on the fourth day of Bhādrapada month, during the bright fortnight can chant the following verse to be free of the consequences:

సింహః ప్రసేనమవధీత్ సింహో ఝ్āంబవతా హతః ।
సుకుమారక మా రోదీః తవ-హ్యేష-శ్శ్యమంతకః ॥
ఇతి ధాత్ర్యుక్త సుశ్లోకం యశ్చ స్మృత్యా జలం పిబేత్ ।
దైవదృష్ట నష్ట చంద్ర దోషాదేవ ప్రముచ్యతే ।

A lion killed Prasena; the lion was killed by Jāmbavan.
Don't cry, O dear child! This Syamantaka jewel is yours.
The one who reads this Sloka and drinks water afterwards will not face any wrongful blame even when they see the moon on this day.

Also, one is not just liberated from wrongful blame due to such circumstances by either reading or listening to this legend about the Syamantaka jewel but is also blessed with all kinds of comforts and happiness by Ganesha. It is in this way, Sage Sūta explains about the story behind Varasiddhi Vināyaka to all the scholars and monks seated in his hermitage.

Thus, ends the excerpt from Skānda Purāna about the Legend of Syamantaka Jewel.

ఉద్వాసన

య॒జ్ఞేన॑ య॒జ్ఞమ॑యజంత దే॒వాః । తాని॒ ధర్మా॑ణి ప్రథ॒మాన్యా॑సన్న్ ।
తే హ॒ నాకం॑ మహి॒మానః॑ సచంతే । యత్ర॒ పూర్వే॑ సా॒ధ్యాః సంతి॑ దే॒వాః ॥

అస్మిన్ బింబే ప్రతిష్ఠితం వరసిద్ధి వినాయకం యథాస్థానముద్వాసయమి ॥

సంకట నాశన గణేశ స్తోత్రం
ప్రణమ్య శిరసా దేవం గౌరీపుత్రం వినాయకమ్ ।
భక్తావాసం స్మరేన్నిత్యమాయుష్కామార్థసిద్ధయే ॥ 1 ॥

ప్రథమం వక్రతుండం చ ఏకదంతం ద్వితీయకమ్ ।
తృతీయం కృష్ణపింగాక్షం గజవక్త్రం చతుర్థకమ్ ॥ 2 ॥

లంబోదరం పంచమం చ షష్ఠం వికటమేవ చ ।
సప్తమం విఘ్నరాజం చ ధూమ్రవర్ణం తథాష్టమమ్ ॥ 3 ॥

నవమం భాలచంద్రం చ దశమం తు వినాయకమ్ ।
ఏకాదశం గణపతిం ద్వాదశం తు గజాననమ్ ॥ 4 ॥

ద్వాదశైతాని నామాని త్రిసంధ్యం యః పఠేన్నరః ।
న చ విఘ్నభయం తస్య సర్వసిద్ధికరం పరమ్ ॥ 5 ॥

విద్యార్థీ లభతే విద్యాం ధనార్థీ లభతే ధనమ్ ।
పుత్రార్థీ లభతే పుత్రాన్మోక్షార్థీ లభతే గతిమ్ ॥ 6 ॥

జపేద్గణపతిస్తోత్రం షడ్భిర్మాసైః ఫలం లభేత్ ।
సంవత్సరేణ సిద్ధిం చ లభతే నాత్ర సంశయః ॥ 7 ॥

అష్టభ్యో బ్రాహ్మణేభ్యశ్చ లిఖిత్వా యః సమర్పయేత్ ।
తస్య విద్యా భవేత్సర్వా గణేశస్య ప్రసాదతః ॥ 8 ॥

ఇతి శ్రీనారదపురాణే సంకష్టనాశనం నామ గణేశ స్తోత్రమ్ ।

వినాయక మంగళాచరణం (తెలుగు)

ఉ ॥ తొండమునేకదంతము తోరపు బొజ్జయు వామ హస్తమున్
మెండుగ మ్రోయు గజ్జెలు మెల్లని చూపులు మందహాసమున్
కొండొక గుజ్జు రూపమున కోరిన విద్యలకెల్ల నొజ్జవై
యుండెడు పార్వతీ తనయ ఓయి గణాధిపా! నీకు మ్రొక్కెదన్

తొలుత నవిఘ్నమస్తనుచు ధూర్జటీ నందన నీకు మ్రొక్కెదన్
ఫలితము సేయవయ్య నిను ప్రార్ధన జేసెద నేకదంత నా
వలపటి చేతి ఘంటమున వాక్కున నెపుడు బాయకుండుమీ
తలపున నిన్ను వేడెదను దైవగణాధిప లోక నాయకా!

క ॥ తలచితినే గణనాథుని
తలచితినే విఘ్నపతిని దలచిన పనిగా
దలచితినే హేరంబుని
దలచిన నా విఘ్నములను తొలగుట కొరకున్

అటుకులు కొబ్బరి పలుకులు
చిటి బెల్లము నానుబ్రాలు చెరకు రసంబున్
నిటలాక్షునగ్ర సుతునకు
పటుకరముగ విందు చేతు ప్రార్థింతు మదిన్

ఓ బొజ్జగణపయ్య నీ బంటు నేనయ్య – ఉండ్రాళ్ళ మీదికి దండు పంపు ।
కమ్మని నెయ్యియు కడుముద్దపప్పును – బొజ్జవిరుగగ దినుచు పొరలుకొనుచు
। జయ మంగళం నిత్య శుభ మంగళమ్ ।

వెండిపళ్ళెరములో వెయివేల ముత్యాలు – కొండలుగ నీలములు కలియబోసి ।
మెండుగను హారములు మెడనిండ వేసికొని – దండిగా నీకిత్తు ధవళారతి ॥ జయ ॥

శ్రీమూర్తివంద్యునకు చిన్మయానందునకు - భాసురస్తోత్రునకు శాశ్వతునకు ।
సోమార్కనేత్రునకు సుందరాకారునకు - కామరూపునకు శ్రీ గణనాధునకును ॥ జయ ॥

ఏకదంతంబును ఎల్లగజవదనంబు – బాగయిన తొండంబు వలపు కడుపు ।
జోకయున మూషికము సొరిదినెక్కాడుచును – భవ్యుడగు దేవగణపతికి నిపుడు ॥ జయ ॥

చెంగల్వ చేమంతి చెలరేగి గన్నేరు తామరలు తంగేడు తరచుగాను ।
పుష్పజాతులు తెచ్చి పూజింతు నేనెపుడు బహుబుద్ధి గణపతికి బాగుగాను ॥జయ ॥
`
};
