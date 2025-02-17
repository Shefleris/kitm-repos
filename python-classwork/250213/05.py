class PrTaskas:
    def __init__(self, prX, prY):
        self.prX = prX
        self.prY = prY

    def dekPr(self):
        return self.prX, self.prY

class PbTaskas:
    def __init__(self, pbX, pbY):
        self.pbX = pbX
        self.pbY = pbY

    def dekPb(self):
        return self.pbX, self.pbY

class Tiese(PrTaskas, PbTaskas):
    def __init__(self, prX, prY, pbX, pbY, spalva):
        super().__init__(prX, prY)
        PbTaskas.__init__(self, pbX, pbY)
        self.spalva = spalva
    
    def brezti(self):
        pr_x, pr_y = self.dekPr()
        print(f'Pradzia: ({pr_x}, {pr_y})')
        print(f'Breziam {self.spalva} linija')
        pb_x, pb_y = self.dekPb()
        print(f'Pabaiga: ({pb_x}, {pb_y})')


t1 = Tiese(0, 0, 5, 5, 'red')
print(vars(t1))

t1.brezti()