export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'خانه',
        to: '/panel/dashboard',
        icon: 'cil-speedometer',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'مشخصات فردی',
        to: '/panel/PersonInfo',
        icon: 'cil-pencil',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'تائید کد ملی',
        to: '/panel/VerifyNationalCode',
        icon: 'cil-check',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'مخزن مدارک',
        to: '/panel/Documents',
        icon: { name: 'cil-layers'},

      },
      {
        _name: 'CSidebarNavItem',
        name: 'ورودی های فعال',
        to: '/panel/ActiveLogins',
        icon: 'cil-puzzle',

      },
      {
        _name: 'CSidebarNavItem',
        name: 'تاریحچه ورود ها  ',
        to: '/panel/LoginHistory',
        icon: 'cil-star',

      },

    ]
  }
]