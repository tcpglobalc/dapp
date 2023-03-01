import type { BaseTranslation } from "../i18n-types";

const cht: BaseTranslation = {
  // this is an example Translation, just rename or delete this folder if you want
  Head:{
    AppName: "TCP",
    ConnectWallet: "鏈接錢包",
  },
  Home:{
    AppName: "TCP 國際版",
    Title: "為響應當地政策監管要求，TCP已關閉舊版APP的使用，並開通此頁面將APP數據導入TACAPA國際版",
    Account:"賬戶",
    AccountPlaceHolder:"請輸入舊版APP登錄賬戶名",
    Password:"密码",
    PasswordPlaceHolder:"請輸入舊版APP登錄密碼",
    Import:"導入",
    Start:"開始",
    Previous:"上一步",
    Tips1:"導入功能將於2022年3月26日關閉，請在此之前盡快完成導入",
    Tips2:"我們檢測到您當前的IP來自服務不支持的國家/地區，請自覺退出此功能頁面",
    LockeBalance:"鎖倉餘額",
    AssetsBalance:"資產餘額",
    ChangeBalance:"零錢餘額",
    Login:"登錄",
    ConfirmData:"確認數據",
    Imported:"已導入",
    ImportedSuccess:"導入成功",
  },
  Postion:{
    Title:"持倉信息",
    PositionBalance:"持倉金額",
    AddPosition:"添加持倉",
    ReleasedBalance:"已釋放持倉",
    Withdrawal:"提取",
    NumberOfTCP:"TCP 數量",
    Balance:"餘額",
    MAX:"最大",
    Approve:"授權",
    InputPlaceholder:"請輸入TCP數量",
    InviteLinkPlaceholder:'請使用邀請鏈接打開dapp'
  },
  Interest:{
    Title:"复息信息",
    ReceiveInterest:"待領取",
    ReceivedInterest:"已領取",
    Receive:"領取",
    Reinvest:"复投",
    ReceiveInterestZero:"沒有可領取的複息"
  },
  Community:{
    Title:"社區信息",
    ReferralUser:"邀請用戶(人)",
    Invite:"邀請",
    ReferralReward:"推薦獎勵",
    MarkerLevel:"創客級別",
    MarkerReward:"創客獎勵",
    Scanit:"掃一掃",
    CopyLink:"或者復制鏈接",
    CopySuccess:"複製成功",
    Copy:"複製"
  },
  Recharge:{
    Title:"TCP充值",
    PositionBalance:"持倉金額",
    AddPosition:"添加持倉",
    ReleasedBalance:"已釋放持倉",
    Withdrawal:"提取",
    NumberOfTCP:"TCP 數量",
    Balance:"餘額",
    MAX:"最大",
    Approve:"授權",
    InputPlaceholder:"請輸入TCP數量",
    InviteLinkPlaceholder:'請使用邀請鏈接打開dapp',
    Turnover:"成交量",
    Quantity:"数量",
    Quota:"限額",
    Safety:"已繳納保證金",
    Allowed:"允許出售",
    Buy:"購買",
    UnitPrice:"單價",
    BusinessNickname:"商家暱稱",
    AvailableBalance:"可用餘額",
    NeedToPay:"需支付",
    WithPermission:"允許使用",
    KindTips:"溫馨提示",
    KindTipsContent:"溫馨提示内容",
    CreateTime:"創建時間",
    LumpSum:"總額",
  },
  Footer:{
    Serve:"服務",
    Help:"幫助中心",
    Postion:"持倉",
    Interest:"复息",
    Community:"社區",
    Recharge:"TCP充值",
  },
  Btn:{
    Close:"關閉",
    Confirm:"確認",
  },
  Error:{
    NoEthereumProviderError:"未檢測到以太坊瀏覽器擴展，在桌面安裝 MetaMask 或從移動設備上的 dApp 瀏覽器訪問。",
    UnsupportedChainIdError:"您已連接到不受支持的網絡。",
    UserRejectedRequestErrorInjected:"請授權本網站訪問您的以太坊賬戶。",
    UnknownError:"出現未知錯誤。檢查控制台以獲取更多詳細信息。",
    MobileEmptyError:"賬號不可以為空",
    MobileNotExistError:"賬號不存在",
    PasswordEmptyError:"密碼不可以為空",
    PasswordIncorrectError:"密碼不正確",
    AccountIsUpError:"一個錢包地址只能綁定一個賬號",
  }
  

};

export default cht;
