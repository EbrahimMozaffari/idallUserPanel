export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'خانه',
        to: '/home',
        icon: 'cil-speedometer',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'مشخصات فردی',
        to: '/PersonInfo',
        icon: 'cil-pencil',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'تائید کد ملی',
        to: '/VerifyNationalCode',
        icon: 'cil-check',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'مخزن مدارک',
        to: '/Documents',
        icon: { name: 'cil-layers'},

      },
      {
        _name: 'CSidebarNavItem',
        name: 'ورودی های فعال',
        to: '/ActiveLogins',
        icon: 'cil-puzzle',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'تاریحچه ورود ها  ',
        to: '/LoginHistory',
        icon: 'cil-star',

      },

    ]
  }
]